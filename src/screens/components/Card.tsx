import { useEffect, useRef } from 'react';
import { Animated, Dimensions, Image, ImageProps, View } from 'react-native';
import {
  Gesture,
  GestureDetector,
  PanGestureHandler,
} from 'react-native-gesture-handler';
import { runOnJS } from 'react-native-reanimated';
import { commons } from '~/styles';

export default function Card({
  card,
  index,
}: {
  card: ImageProps;
  index: number;
}) {
  const height = Dimensions.get('screen').height;
  const width = Dimensions.get('screen').width;

  const cardWidth = 300;
  const cardHeight = (cardWidth * 2) / 3;

  const yCenter = (height - cardHeight) / 2;

  const randomX = Math.random() * width;
  const randomEdge = Math.random();

  const cardValue = new Animated.ValueXY({ x: -(randomX - 300), y: -400 });
  const rotate = new Animated.Value(randomEdge);
  const spinValue = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ['-15deg', '15deg'],
  });
  useEffect(() => {
    Animated.spring(cardValue, {
      toValue: { x: 0, y: yCenter },
      delay: index * 300,
      useNativeDriver: false,
    }).start();
  }, []);

  return (
    <Animated.Image
      source={card}
      style={[
        {
          position: 'absolute',
          width: cardWidth,
          height: cardHeight,
          objectFit: 'contain',
          transform: [
            {
              rotate: spinValue,
            },
            {
              perspective: 100,
            },
          ],
        },
        commons.shadow,
        cardValue.getLayout(),
      ]}
    />
  );
}
