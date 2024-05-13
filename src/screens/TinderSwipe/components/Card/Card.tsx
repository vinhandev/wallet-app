import React from 'react';
import { Image, View } from 'react-native';
import { ItemProps } from '../../types';
import { styles } from './Card.styles';
import { commons } from '~/styles';

export default function Card({ item }: { item: ItemProps }) {
  return (
    <View style={styles.container}>
      <Image style={[commons.image, commons.shadow]} source={item} />
    </View>
  );
}
