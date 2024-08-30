import { StyleSheet } from 'react-native';
import { colors } from '~/assets';

export const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    padding: 10,
    backgroundColor: colors.button,
  },
  title: {
    color: colors.textBody,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
