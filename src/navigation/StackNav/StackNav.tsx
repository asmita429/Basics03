import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NotificationScreen, ProfileScreen, SettingScreen} from '../../screen';
import MyDrawer from '../DrawerNav/DrawerNav';
import MyTabs from '../BottomTab/BottomTab';

const Stack = createStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="MyDrawer"
      screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="MyDrawer" component={MyDrawer} /> */}
      <Stack.Screen name="MyTabs" component={MyTabs} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingScreen} />
      <Stack.Screen name="Notification" component={NotificationScreen} />
    </Stack.Navigator>
  );
};

export default MyStack;

const styles = StyleSheet.create({});
