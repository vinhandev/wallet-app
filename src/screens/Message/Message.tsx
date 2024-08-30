import { Text, View } from 'react-native';
import { styles } from './Message.styles';
import { data } from '~/assets';
import { Card } from './components';
import Animated, { runOnJS, useSharedValue } from 'react-native-reanimated';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { useState } from 'react';

const renderCards = data.cards;
const cardLength = renderCards.length;
export default function Message() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const gesture = Gesture.Pan()
    .onBegin(() => {
      console.log('begin');
    })
    .onUpdate((e) => {
      console.log('update', e.translationX, e.translationY);
    })
    .onEnd(() => {
      console.log('end');
      runOnJS(setSelectedIndex)(selectedIndex + 1);
    });

  function onChangeSelectedIndex() {
    setSelectedIndex(selectedIndex + 1);
  }

  return (
    <View style={styles.container}>
      {renderCards
        .map((item, index) => {
          if (index < selectedIndex) return null;
          if (index === selectedIndex) {
            return (
              <GestureDetector key={index} gesture={gesture}>
                <Card
                  cardImage={item}
                  index={index}
                  selectedIndex={selectedIndex}
                  cardLength={cardLength}
                  onPress={onChangeSelectedIndex}
                />
              </GestureDetector>
            );
          }
          return (
            <Card
              key={index}
              cardImage={item}
              index={index}
              selectedIndex={selectedIndex}
              cardLength={cardLength}
              onPress={onChangeSelectedIndex}
            />
          );
        })
        .reverse()}
    </View>
  );
}
