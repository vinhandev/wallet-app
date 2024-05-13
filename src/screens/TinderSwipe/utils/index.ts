import { Platform, UIManager } from 'react-native';

function configLayoutAnimation() {
  if (
    Platform.OS === 'android' &&
    UIManager.setLayoutAnimationEnabledExperimental
  ) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}
export default {
  configLayoutAnimation,
};
