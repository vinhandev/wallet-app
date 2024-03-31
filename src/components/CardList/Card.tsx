import Animated, {
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';

export default function Card({
  card,
  index,
  scrollY,
}: {
  card: any;
  index: number;
  scrollY: any;
}) {
  const translateY = useDerivedValue(() => -scrollY.value);
  return (
    <Animated.Image
      key={index}
      source={card}
      style={{
        width: '100%',
        height: undefined,
        aspectRatio: 7 / 4,
        marginVertical: 5,
        transform: [{ translateY }],
      }}
    />
  );
}
