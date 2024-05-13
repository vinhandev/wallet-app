import { ImageProps, _Image } from 'react-native';

const _Images = {
  splash: require('./splash.png'),
  icon: require('./icon.png'),
  favicon: require('./favicon.png'),
  adaptiveIcon: require('./adaptive-icon.png'),
  mockCard1: require('./cards/mockCard1.png'),
  mockCard2: require('./cards/mockCard2.png'),
  mockCard3: require('./cards/mockCard3.png'),
  mockCard4: require('./cards/mockCard4.png'),
  mockCard5: require('./cards/mockCard5.png'),
  mockCard6: require('./cards/mockCard6.png'),
  mockCard7: require('./cards/mockCard7.png'),
  mockCard8: require('./cards/mockCard8.png'),
  mockCard9: require('./cards/mockCard9.png'),
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
