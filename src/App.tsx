import React from 'react';
import {lightTheme, darkTheme, sharedStyles} from './Theme';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useColorScheme} from 'react-native';
import {CheckoutScreen} from './screens/CheckoutScreen';
import {AppScreen} from './screens/AppScreen';

const Stack = createNativeStackNavigator();

const App: () => JSX.Element = () => {
  const isDarkMode = useColorScheme();
  const themeStyle = isDarkMode === 'dark' ? darkTheme : lightTheme;
  const styles = {...sharedStyles, ...themeStyle};

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: styles.background,
          headerTitleStyle: styles.primaryFont,
        }}>
        <Stack.Screen name="Home" component={AppScreen} />
        <Stack.Screen name="Checkout" component={CheckoutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
