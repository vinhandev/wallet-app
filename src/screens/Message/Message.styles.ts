import { StyleSheet } from 'react-native';
import { colors, metrics } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: colors.color6,

    padding: metrics.paddingContainer,
  },
});
