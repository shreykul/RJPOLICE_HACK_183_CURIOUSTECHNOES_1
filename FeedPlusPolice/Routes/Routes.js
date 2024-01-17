import { View, Text } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from '../Src/Screen/Login/Login';
import Splash from '../Src/common/Splash';
import Homescreen from '../Src/Screen/Homescreen/Homescreen';
import Profile from '../Src/Screen/Homescreen/Profile';

const Stack = createStackNavigator();


function Routes(props) {

    return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}} initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Homescreen" component={Homescreen} />
        </Stack.Navigator>
  
      </NavigationContainer>
    );
  }
  export function handleNavigation(nav) {
    switch (nav.type) {
        case 'push':
            nav.navigation.navigate(nav.page, nav.passProps);
            break;
        case 'setRoot':
            nav.navigation.reset({ index: 0, routes: [{ name: nav.page }] })
            break;
        case 'pop':
            nav.navigation.goBack();
            break;
        case 'popToTop':
            nav.navigation.popToTop();
            break;
    }
  }
  

export default Routes