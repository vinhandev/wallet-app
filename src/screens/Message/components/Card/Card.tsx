import { Image, ImageProps, TouchableWithoutFeedback } from 'react-native';
import { styles } from './Card.styles';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withSpring,
} from 'react-native-reanimated';
import { useEffect } from 'react';

type Props = {
  cardImage: ImageProps;
  index: number;
  selectedIndex: number;
  cardLength: number;
  onPress: () => void;
};

export default function Card({
  cardImage,
  index,
  selectedIndex,
  cardLength,
  onPress,
}: Props) {
  const delay = index * 200;
  const initValue = index * 10;
  const maxValue = (cardLength - 1) * 10;

  const card = useSharedValue(selectedIndex === 0 ? 0 : selectedIndex * 10);

  const animatedCard = useAnimatedStyle(() => {
    const size = interpolate(card.value, [0, maxValue], [1, 0.8]);
    console.log(size, card.value, index);
    return {
      transform: [
        { scale: size },
        {
          translateY: card.value,
        },
      ],
      opacity: selectedIndex === index ? 1 : 0.2,
    };
  });

  useEffect(() => {
    card.value = withDelay(delay, withSpring(initValue));
  }, []);

  return (
    <TouchableWithoutFeedback
      onPress={onPress}
      style={[styles.imageWrapper, styles.container]}
    >
      <Animated.View style={[animatedCard, styles.container]}>
        <Image source={cardImage} style={styles.image} />
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}
