import React, {useState} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import {lightTheme, darkTheme, sharedStyles} from '../Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import {OfferItemPropsData} from '../components/OfferItem';
import {CalculateSum} from '../tasks/Calc';
// @ts-ignore
export function CheckoutScreen({route}) {
  const isDarkMode = useColorScheme();
  const themeStyle = isDarkMode === 'dark' ? darkTheme : lightTheme;
  const styles = {...sharedStyles, ...themeStyle};

  const [items, setItems] = useState<OfferItemPropsData[]>(route.params);

  const indexes = [];
  indexes.push(
    items.map(i => {
      return i.foodName + Date.now() + Math.random();
    }),
  );

  const onDelete = (id: string) => {
    let filtered = items.filter((val, i) => {
      if (val.foodName !== id) {
        return val;
      }
    });
    setItems(filtered);
  };
  return (
    <SafeAreaView style={[styles.view, styles.f1]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <View style={[styles.view, styles.f1]}>
        <FlatList
          data={items}
          keyExtractor={items => items.foodName}
          renderItem={({item}) => (
            <View style={[styles.checkoutRowDetails, styles.aic]}>
              <Text>{item.foodName}</Text>
              <Text>{item.currency}</Text>
              <TouchableOpacity
                style={styles.checkoutRemove}
                onPress={() => {
                  onDelete(item.foodName);
                }}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          )}
        />
        <View style={styles.checkoutDetails}>
          <Text style={styles.text2}>{CalculateSum(items)} €</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
