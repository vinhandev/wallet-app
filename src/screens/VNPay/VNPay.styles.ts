import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color4,

    justifyContent: 'space-around',

    padding: metrics.paddingContainer,
  },
});
