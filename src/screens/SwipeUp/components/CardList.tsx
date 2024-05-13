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
import { data, metrics } from '~/assets';

export default function CardList() {
  const [listHeight, setListHeight] = useState(0);
  const { height: screenHeight } = useWindowDimensions();
  const scrollY = useSharedValue(0);
  const activeIndex = useSharedValue(0);
  const maxScrollY =
    listHeight - screenHeight + 100 + metrics.paddingContainer * 2;

  const pan = Gesture.Pan()
    .onBegin(() => {
      cancelAnimation(scrollY);
    })
    .onStart(() => {})
    .onChange((e) => {
      scrollY.value = clamp(
        (scrollY.value = scrollY.value - e.changeY),
        0,
        maxScrollY
      );
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
      <View onLayout={(e) => setListHeight(e.nativeEvent.layout.height)}>
        {data.cards.map((card, index) => (
          <Card
            card={card}
            key={index}
            index={index}
            scrollY={scrollY}
            activeCardIndex={activeIndex}
          />
        ))}
      </View>
    </GestureDetector>
  );
}
