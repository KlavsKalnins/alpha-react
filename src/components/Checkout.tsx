import React from 'react';
import {TouchableOpacity, Text, useColorScheme} from 'react-native';
import {View} from 'react-native-animatable';
import {lightTheme, darkTheme, sharedStyles} from '../Theme';

interface CheckoutProps {
  amount: number;
  currency: number;
  doCheckout: () => void;
}

export const Checkout: React.FC<CheckoutProps> = ({
  amount,
  currency,
  doCheckout,
}) => {
  const isDarkMode = useColorScheme();
  const themeStyle = isDarkMode === 'dark' ? darkTheme : lightTheme;
  const styles = {...sharedStyles, ...themeStyle};
  return (
    <TouchableOpacity style={styles.checkout} onPress={() => doCheckout()}>
      <View style={styles.checkoutRow}>
        <Text style={[styles.darkenBackground, styles.text2]}>{amount}</Text>
        <Text style={[styles.text2, {alignSelf: 'center'}]}>View Order</Text>
      </View>
      <Text style={styles.text2}>{currency} €</Text>
    </TouchableOpacity>
  );
};
