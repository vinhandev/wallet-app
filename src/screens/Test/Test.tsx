import { Skeleton } from 'moti/skeleton';
import { useEffect, useState } from 'react';
import { FlatList, Image, Text, View } from 'react-native';
import { delay } from '~/utils';

export default function Test() {
  const arr = Array.from({ length: 1000000 }).map((item) => 'Hello World');
  const mock = Array.from({ length: 8 }).map((item) => 'Hello World');

  const [data, setData] = useState<string[]>(mock);

  useEffect(() => {
    async function init() {
      await delay(5000);
      console.log('delay');
      setData(arr);
    }

    void init();
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: 'red',
        borderWidth: 10,
      }}
    >
      <Text>Test</Text>
    </View>
  );
}
