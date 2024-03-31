import { Image, Text, View } from 'react-native';

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
  return (
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
  );
}
