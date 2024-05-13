import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { CardList } from './components';
import { colors, metrics } from '~/assets';

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          padding: metrics.paddingContainer,
        }}
      >
        <CardList />
        <StatusBar style="light" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.color1,
  },
});
