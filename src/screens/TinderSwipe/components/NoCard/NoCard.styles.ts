import { StyleSheet } from 'react-native';
import { colors, fontSizes, fontWeight } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    color: colors.textBody,
    fontSize: fontSizes.title,
    fontWeight: fontWeight.bold,
  },
});
