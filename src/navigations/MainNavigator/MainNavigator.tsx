import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useState } from 'react';
import { Button } from 'react-native';
import { colors } from '~/assets';
import { Tarots, SwipeUp, Test, TinderSwipe } from '~/screens';

const NativeStack = createNativeStackNavigator();

const name = 'Wallet';

export default function MainNavigator() {
  const [index, setIndex] = useState(1);

  const screens: { name: string; component: () => React.JSX.Element }[] = [
    {
      name: 'Apple Pay',
      component: SwipeUp,
    },
    {
      name: 'Tinder',
      component: TinderSwipe,
    },
    {
      name: 'Tarots',
      component: Tarots,
    },
    {
      name: 'Test',
      component: Test,
    },
  ];

  return (
    <NativeStack.Navigator
      screenOptions={({ navigation }) => {
        function next() {
          navigation.navigate(`${name}${index}`);
          setIndex(index + 1);
        }
        function back() {
          if (navigation.canGoBack()) {
            navigation.goBack();
            setIndex(index - 1);
          }
        }
        return {
          headerBackButtonMenuEnabled: true,
          headerTransparent: true,
          headerStyle: {
            backgroundColor: colors.headerBackground,
          },
          headerTintColor: colors.headerTint,
          headerLeft: () =>
            index !== 1 && (
              <Button color={colors.buttonTint} onPress={back} title="Back" />
            ),
          headerRight: () => (
            <Button color={colors.buttonTint} onPress={next} title="Next" />
          ),
        };
      }}
    >
      {screens.map((item, index) => (
        <NativeStack.Screen
          key={index}
          options={{
            title: item.name,
          }}
          name={`${name}${index}`}
          component={item.component}
        />
      ))}
    </NativeStack.Navigator>
  );
}
