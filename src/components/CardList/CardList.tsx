import { Image, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
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
  const pan = Gesture.Pan()
    .onStart(() => {
      console.log('start');
    })
    .onChange((e) => {
      console.log('change, y:', e.changeY);
    })
    .onEnd(() => {
      console.log('end');
    });

  return (
    <GestureDetector gesture={pan}>
      <View style={{ padding: 10 }}>
        {cards.map((card, index) => (
          <Image
            key={index}
            source={card}
            style={{
              width: '100%',
              height: undefined,
              aspectRatio: 7 / 4,
              marginVertical: 5,
            }}
          />
        ))}
      </View>
    </GestureDetector>
  );
}
