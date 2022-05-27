import * as React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CreateScreen from '../screens/CreateScreen'
import SettingsScreen from '../screens/SettingsScreen'
import MainScreen from '../screens/MainScreen'

const Tab = createBottomTabNavigator();

const TabBarScreen = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="CreateScreen" component={CreateScreen} options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (<Image source={require("../assets/CreateIcon.png")} style={{width: 42, height: 42}} />)
          }}  />
        <Tab.Screen name="MainScreen" component={MainScreen} options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (<Image source={require("../assets/SmallLogo.png")} style={{width: 47, height: 47}} />)
          }}/>
        <Tab.Screen name="SettingsScreen" component={SettingsScreen} options={{
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: () => (<Image source={require("../assets/SettingsIcon.png")} style={{width: 42, height: 42}} />)
          }} />
    </Tab.Navigator>
  );
};

export default TabBarScreen;