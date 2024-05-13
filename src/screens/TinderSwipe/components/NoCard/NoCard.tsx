import { Button, Text, View } from 'react-native';

import { styles } from './NoCard.styles';

type Props = {
  onAddMoreCard: () => void;
  title: string;
};
export default function NoCard({ title, onAddMoreCard }: Props) {
  return (
    <View style={[styles.container]}>
      <Text style={styles.title}>{title}</Text>
      <Button title="More Card" onPress={onAddMoreCard} />
    </View>
  );
}
