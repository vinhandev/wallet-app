import { NativeEventEmitter, Text, View } from 'react-native';
import { styles } from './VNPay.styles';
import { Button } from '~/components';

export default function VNPay() {
  function onPaymentByVNPay() {}
  function onPaymentStripe() {}

  return (
    <View style={styles.container}>
      <Button onPress={onPaymentByVNPay} title="VN PAY" />
      <Button onPress={onPaymentStripe} title="Stripe" />
    </View>
  );
}
