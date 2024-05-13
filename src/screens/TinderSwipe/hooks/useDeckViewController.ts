import { useEffect, useState } from 'react';
import { data } from '~/assets';
import { DirectionProps, ItemProps } from '../types';
import { Animated, LayoutAnimation, PanResponder } from 'react-native';
import constant from '../constant';

const { defaultRotate, screenWidth, swipeOutDuration, swipeThreshold } =
  constant;

export default function () {
  const [cards, setCards] = useState(data.cards);
  const [index, setIndex] = useState(0);

  const position = new Animated.ValueXY();
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gesture) => {
      console.log(gesture.dx);
      position.setValue({ x: gesture.dx, y: gesture.dy });
    },
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > swipeThreshold) {
        forceSwipe('left');
      } else if (gesture.dx < -swipeThreshold) {
        forceSwipe('right');
      } else {
        resetPosition();
      }
    },
  });

  const getCardStyle = () => {
    const rotate = position.x.interpolate({
      inputRange: [-screenWidth * 1.5, 0, screenWidth * 1.5],
      outputRange: [`-${defaultRotate}`, '0deg', `${defaultRotate}`],
    });
    return [
      position.getLayout(),
      {
        transform: [
          {
            rotate,
          },
        ],
      },
    ];
  };

  function resetPosition() {
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
  }

  function forceSwipe(direction: DirectionProps) {
    const x = direction === 'left' ? screenWidth : -screenWidth;
    Animated.timing(position, {
      toValue: { x, y: 0 },
      duration: swipeOutDuration,
      useNativeDriver: false,
    }).start(() => onSwipeComplete(direction));
  }

  function onAddMoreCard() {
    setIndex(0);
  }

  function onSwipeLeft(item: ItemProps) {}
  function onSwipeRight(item: ItemProps) {}

  function onSwipeComplete(direction: DirectionProps) {
    const item = cards[index];
    if (direction === 'left') {
      onSwipeLeft(item);
    } else {
      onSwipeRight(item);
    }
    Animated.spring(position, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start();
    if (index !== cards.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  }

  useEffect(() => {
    LayoutAnimation.spring();
  }, [index]);

  return { cards, index, panResponder, getCardStyle, onAddMoreCard };
}
