import { useState } from 'react';
import Animated, {
  clamp,
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
  const [height, setHeight] = useState(0);
  const translateY = useDerivedValue(() =>
    clamp(-scrollY.value, -index * height, 1000)
  );
  return (
    <Animated.Image
      key={index}
      onLayout={(e) => setHeight(e.nativeEvent.layout.height + 10)}
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
