import { ImageProps, _Image } from 'react-native';

const _Images = {
  splash: require('./splash.png'),
  icon: require('./icon.png'),
  favicon: require('./favicon.png'),
  adaptiveIcon: require('./adaptive-icon.png'),
  mockCard1: require('./mockCard1.png'),
  mockCard2: require('./mockCard2.png'),
  mockCard3: require('./mockCard3.png'),
  mockCard4: require('./mockCard4.png'),
  mockCard5: require('./mockCard5.png'),
  mockCard6: require('./mockCard6.png'),
  mockCard7: require('./mockCard7.png'),
  mockCard8: require('./mockCard8.png'),
  mockCard9: require('./mockCard9.png'),
};

export const images: {
  splash: ImageProps;
  icon: ImageProps;
  favicon: ImageProps;
  adaptiveIcon: ImageProps;
  mockCard1: ImageProps;
  mockCard2: ImageProps;
  mockCard3: ImageProps;
  mockCard4: ImageProps;
  mockCard5: ImageProps;
  mockCard6: ImageProps;
  mockCard7: ImageProps;
  mockCard8: ImageProps;
  mockCard9: ImageProps;
} = _Images;
