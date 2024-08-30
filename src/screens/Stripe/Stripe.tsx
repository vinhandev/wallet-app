import { Image, Text, TouchableOpacity, View } from 'react-native';
import { styles } from './Stripe.styles';
import { data } from '~/assets';
import { StripeProvider } from '@stripe/stripe-react-native';

export default function Stripe() {
  const card = data.cards[0];

  function onStripePayment() {}

  return (
    <StripeProvider
      publishableKey="pk_test_TYooMQauvdEDq54NiTphI7jx"
      urlScheme="your-url-scheme"
    >
      <View style={styles.container}>
        <TouchableOpacity onPress={onStripePayment}>
          <Image source={card} style={styles.image} />
        </TouchableOpacity>
      </View>
    </StripeProvider>
  );
}
