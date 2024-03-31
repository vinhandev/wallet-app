import { Image, Text, View, useWindowDimensions } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import {
  cancelAnimation,
  clamp,
  useSharedValue,
  withDecay,
  withClamp,
} from 'react-native-reanimated';
import Card from './Card';
import { useState } from 'react';

const cards = [
  require('~/assets/images/cards/Card 1.png'),
  require('~/assets/images/cards/Card 2.png'),
  require('~/assets/images/cards/Card 3.png'),
  require('~/assets/images/cards/Card 4.png'),
  require('~/assets/images/cards/Card 5.png'),
  require('~/assets/images/cards/Card 6.png'),
  require('~/assets/images/cards/Card 7.png'),
  require('~/assets/images/cards/Card 8.png'),
  require('~/assets/images/cards/Card 9.png'),
];
export function CardList() {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const scrollY = useSharedValue(0);
  const maxScrollY = listHeight - screenHeight + 100;

  const pan = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(scrollY);
      console.log('onBegin');
    })
    .onStart(() => {
      console.log('start');
    })
    .onChange((e) => {
      scrollY.value = clamp(
        (scrollY.value = scrollY.value - e.changeY),
        0,
        maxScrollY
      );
      console.log('Scroll', scrollY.value);
    })
    .onEnd((e) => {
      scrollY.value = withClamp(
        { min: 0, max: maxScrollY },
        withDecay({
          velocity: -e.velocityY,
        })
      );
    });

  return (
    <GestureDetector gesture={pan}>
      <View
        style={{ padding: 10 }}
        onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}
      >
        {cards.map((card, index) => (
          <Card card={card} key={index} index={index} scrollY={scrollY} />
        ))}
      </View>
    </GestureDetector>
  );
}
