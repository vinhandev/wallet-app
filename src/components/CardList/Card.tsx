import { useState } from 'react';
import { useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  ReduceMotion,
  clamp,
  useAnimatedReaction,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

export default function Card({
  card,
  index,
  scrollY,
  activeCardIndex,
}: {
  card: any;
  index: number;
  scrollY: any;
  activeCardIndex: any;
}) {
  const [height, setHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const translateY = useSharedValue(0);

  useAnimatedReaction(
    () => scrollY.value,
    (current) => {
      translateY.value = clamp(-current, -index * height, 1000);
    }
  );
  useAnimatedReaction(
    () => activeCardIndex.value,
    (current, previous) => {
      if (current === previous) {
        console.log('Current', current, 'Previous', previous);
        return;
      }

      if (activeCardIndex.value === null) {
        translateY.value = withTiming(
          clamp(-scrollY.value, -index * height, 1000)
        );
      } else if (activeCardIndex.value === index) {
        translateY.value = withTiming(-index * height, {
          duration: 1000,
          easing: Easing.bounce,
          reduceMotion: ReduceMotion.System,
        });
      } else {
        translateY.value = withTiming(
          -index * height * 0.9 + screenHeight * 0.5
        );
      }

      // no active => move to bottom

      console.log('Current', current, 'Previous', previous);
    }
  );

  const tap = Gesture.Tap().onEnd((e) => {
    if (activeCardIndex.value === null) {
      activeCardIndex.value = index;
    } else {
      activeCardIndex.value = null;
    }
  });

  return (
    <GestureDetector gesture={tap}>
      <Animated.Image
        key={index}
        onLayout={(e) => setHeight(e.nativeEvent.layout.height + 10)}
        source={card}
        style={{
          width: '100%',
          height: undefined,
          aspectRatio: 7 / 4,
          marginVertical: 5,
          transform: [{ translateY }],
        }}
      />
    </GestureDetector>
  );
}
