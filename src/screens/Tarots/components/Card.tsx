import { useEffect, useRef } from 'react';
import { Dimensions, Image, ImageProps, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedReaction,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { snapPoint } from 'react-native-redash';
import { commons } from '~/styles';

const { width, height } = Dimensions.get('window');

const cardWidth = 300;
const DURATION = 250;
const cardHeight = (cardWidth * 2) / 3;

const side = (width + cardWidth + 50) / 2;
const SNAP_POINTS = [-side, 0, side];

export default function Card({
  card,
  index,
  shuffleBack,
}: {
  card: ImageProps;
  index: number;
  shuffleBack: Animated.SharedValue<boolean>;
}) {
  const x = useSharedValue(0);
  const y = useSharedValue(-height);
  const theta = Math.random() * 20 - 10;
  const rotateZ = useSharedValue(0);
  const scale = useSharedValue(1);

  useAnimatedReaction(
    () => shuffleBack.value,
    () => {
      if (shuffleBack.value) {
        const delay = 150 * index;
        x.value = withDelay(delay, withSpring(0));
        rotateZ.value = withDelay(
          delay,
          withSpring(theta, {}, () => {
            shuffleBack.value = false;
          })
        );
      }
    }
  );

  const onGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    { x: number; y: number }
  >({
    onStart: (_, ctx) => {
      ctx.x = x.value;
      ctx.y = y.value;
      scale.value = withTiming(1.1, { easing: Easing.inOut(Easing.ease) });
      rotateZ.value = withTiming(0, { easing: Easing.inOut(Easing.ease) });
    },
    onActive: ({ translationX, translationY }, ctx) => {
      x.value = ctx.x + translationX;
      y.value = ctx.y + translationY;
    },
    onEnd: ({ velocityX, velocityY }) => {
      const dest = snapPoint(x.value, velocityX, SNAP_POINTS);
      x.value = withSpring(dest, { velocity: velocityX });
      y.value = withSpring(0, { velocity: velocityY });
      scale.value = withTiming(1, { easing: Easing.inOut(Easing.ease) }, () => {
        if (index === 0 && dest !== 0) {
          shuffleBack.value = true;
        }
      });
    },
  });

  const style = useAnimatedStyle(() => ({
    transform: [
      { perspective: 2000 },
      { translateX: x.value },
      { translateY: y.value },
      { rotateZ: `${rotateZ.value}deg` },
      { rotateX: '30deg' },
      { scale: scale.value },
    ],
  }));

  useEffect(() => {
    const delay = index * DURATION;
    y.value = withDelay(
      delay,
      withTiming(0, {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease),
      })
    );
    rotateZ.value = withDelay(
      delay,
      withTiming(theta, {
        duration: DURATION,
        easing: Easing.inOut(Easing.ease),
      })
    );
  }, []);

  return (
    <View
      style={[
        {
          position: 'absolute',
          width: cardWidth,
          height: cardHeight,
        },
        commons.shadow,
      ]}
      pointerEvents="box-none"
    >
      <PanGestureHandler onGestureEvent={onGestureEvent}>
        <Animated.View style={style}>
          <Image
            source={card}
            style={{
              width: cardWidth,
              height: cardHeight,
              objectFit: 'contain',
            }}
          />
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}
