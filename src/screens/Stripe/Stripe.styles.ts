import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.color5,
    padding: metrics.paddingContainer,
  },
  image: {
    width: 250,
    height: undefined,
    aspectRatio: 3 / 2,
    objectFit: 'contain',
  },
});
