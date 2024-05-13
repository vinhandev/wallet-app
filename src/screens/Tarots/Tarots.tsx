import { useEffect, useRef } from 'react';
import { Animated, Button, Image, View } from 'react-native';
import Card from '../components/Card';
import { data, metrics, colors } from '~/assets';

export default function AnimatedScreen() {
  const { cards } = data;

  return (
    <View
      style={{
        flex: 1,
        padding: metrics.paddingContainer,
        justifyContent: 'space-between',
        backgroundColor: colors.color2,
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {cards.map((item, index) => (
          <Card key={index} card={item} index={index} />
        ))}
      </View>
    </View>
  );
}
