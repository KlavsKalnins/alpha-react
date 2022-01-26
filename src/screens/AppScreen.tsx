import React, {useState} from 'react';
import {FlatList} from 'react-native';
import {lightTheme, darkTheme, sharedStyles} from '../Theme';
import {
  SafeAreaView,
  StatusBar,
  useColorScheme,
  Text,
  View,
} from 'react-native';
import {OfferItem, OfferItemPropsData} from '../components/OfferItem';
import {languages} from '../data/languages';
import {Checkout} from '../components/Checkout';
import {CalculateSum} from '../tasks/Calc';

// @ts-ignore
export function AppScreen({navigation}) {
  const isDarkMode = useColorScheme();
  const themeStyle = isDarkMode === 'dark' ? darkTheme : lightTheme;
  const styles = {...sharedStyles, ...themeStyle};

  const [items, setItems] = useState<OfferItemPropsData[]>([]);

  const onDelete = (id: string) => {
    let filtered = items.filter((val, i) => {
      if (val.foodName !== id) {
        return val;
      }
    });
    setItems(filtered);
  };

  var days = [
    "Monday's",
    "Tuesday's",
    "Wednesday's",
    "Thursday's",
    "Friday's",
    "Saturday's",
    "Sunday's",
  ];
  const today = days[new Date().getDay()];
  return (
    <SafeAreaView style={[styles.view, styles.f1]}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      {items.length > 0 ? (
        <Checkout
          amount={items?.length}
          currency={CalculateSum(items)}
          doCheckout={() => navigation.navigate('Checkout', items)}
        />
      ) : undefined}

      <FlatList
        data={languages}
        ListHeaderComponent={
          <View style={styles.textMiddleDiv}>
            <Text style={[styles.primaryFont, styles.fontBold]}>
              Welcome to the best food place
            </Text>
            <Text style={[styles.primaryFont, styles.fontLight]}>
              {today} specials
            </Text>
          </View>
        }
        renderItem={({item}) => (
          <OfferItem
            foodName={item.foodName}
            currency={item.currency}
            images={item.images}
            add={function (data: OfferItemPropsData): void {
              setItems([...items, data]);
            }}
            onDelete={function (item: OfferItemPropsData): void {
              onDelete(item.foodName);
            }}></OfferItem>
        )}
      />
      <View style={{height: 70}}></View>
    </SafeAreaView>
  );
}
