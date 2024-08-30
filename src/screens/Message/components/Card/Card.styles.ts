import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
  imageWrapper: {
    width: 250,
    aspectRatio: 3 / 2,
    height: undefined,
  },
  image: {
    width: 250,
    aspectRatio: 3 / 2,
    height: undefined,
    objectFit: 'contain',
  },
});
