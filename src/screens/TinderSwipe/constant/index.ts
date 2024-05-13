import { Dimensions } from 'react-native';

const defaultRotate = '120deg';
const screenWidth = Dimensions.get('screen').width;
const swipeThreshold = 0.25 * screenWidth;
const swipeOutDuration = 250;
const moreAddedTop = 10;

export default {
  defaultRotate,
  screenWidth,
  swipeThreshold,
  swipeOutDuration,
  moreAddedTop,
};
