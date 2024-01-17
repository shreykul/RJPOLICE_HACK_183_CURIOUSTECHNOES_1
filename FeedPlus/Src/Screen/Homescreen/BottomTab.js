import { View, Text, Modal, TouchableOpacity, Image, FlatList, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import ImagePath from '../../common/ImagePath';
import MarginHW from '../../common/MarginHW';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Homescreens from './Homescreens';
import Maps from '../Mapscreen/Maps';
import ImageSize from '../../common/ImageSize';
import HWSize from '../../common/HWSize';
import { Colors } from '../../common/color';

const BottomTab = () => {

  const Tab = createBottomTabNavigator();
  const RenderTabBarIcon = (props) => {
    const { lable, isFocused, active_tab_icon, inactive_tab_icon } = props;
  
    return (
      <View style={style.active_viewOfTabs}>
         <Image
         style={isFocused ?style.active_tabIconCss:style.inactive_tabIconCss}
         resizeMode={"contain"}
         source={isFocused ? active_tab_icon : inactive_tab_icon}
       />
       <Text style={{color:isFocused ?Colors.blue:Colors.black}}>{lable}</Text>
      </View>
    );
  };
  return (
    <View style={{flex:1}}>

 

    <Tab.Navigator
      initialRouteName={'Home'}
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height:HWSize.H_Height80,
          borderTopWidth: 0.5,
          backgroundColor:Colors.white,
          alignItems: "center",
          justifyContent: "center",
         
        },
        headerShown: false,

        // activeTintColor: '#1889DA',
        // inactiveTintColor: '#50555C',
      })}
    >
    <Tab.Screen
        name="Home"
        component={Homescreens}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabBarIcon
                isFocused={focused}
                lable="Home"
                active_tab_icon={ImagePath.Home_Select}
                inactive_tab_icon={ImagePath.Home_Unselect}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarLabel: "",
          tabBarIcon: ({ focused }) => {
            return (
              <RenderTabBarIcon
                isFocused={focused}
                lable="Maps"
                active_tab_icon={ImagePath.map_select}
                inactive_tab_icon={ImagePath.map_unselect}
              />
            );
          },
        }}
      />
      </Tab.Navigator>

    </View>
  )
}

const style = StyleSheet.create({
  active_viewOfTabs: {
    height:HWSize.H_Height80,
    borderRadius:MarginHW.MarginH10,
    alignItems: "center",
    justifyContent: "center",
    top:MarginHW.MarginH5
  },
  active_tabIconCss: { height:ImageSize.ImageH40, width:ImageSize.ImageW40,},
  inactive_tabIconCss:{height:ImageSize.ImageH40, width:ImageSize.ImageW40,}

});
export default BottomTab