/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import {Image} from 'react-native';
import CoinsStack from './src/components/coins/CoinsStack';
import {createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from './src/res/colors';
import FavoriteStack from './src/components/coins/FavoriteStack';

const Tabs = createBottomTabNavigator();

function App () {
  // const isDarkMode = useColorScheme() === 'dark';

  // const backgroundStyle = {
  //   backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  // };

  return (
    <NavigationContainer>
      <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: Colors.gold,
          desactiveTintColor: Colors.white,
          style: { 
            backgroundColor: Colors.blackPearl
          }
        }}
      >
        <Tabs.Screen
            name="Characters"
            component={CoinsStack}  
            options= {{
              tabBarIcon: ({size,color}) => (
                <Image
                  style= {{tintColor: color, width: size, height: size}} 
                  source={{uri: 'https://img.icons8.com/small/64/000000/user-male-circle.png'}}
                />
              )
            }}
        />
        <Tabs.Screen
            name="Favorites"
            component={FavoriteStack}  
            options= {{
              tabBarIcon: ({size,color}) => (
                <Image
                  style= {{tintColor: color, width: size, height: size}} 
                  source={{uri: 'https://img.icons8.com/ios/64/000000/star--v1.png'}}
                />
              )
            }}
        />
      </Tabs.Navigator>
    </NavigationContainer>
  );
};

export default App;
