import { Dimensions, StyleSheet } from 'react-native';
import { colors, metrics } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color3,
    gap: 15,
    overflow: 'hidden',
    padding: metrics.paddingContainer,
  },
  cards: {},
  cardWrapper: {
    position: 'absolute',
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {},
});
