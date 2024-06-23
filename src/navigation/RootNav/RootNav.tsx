import {StyleSheet} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyDrawer from '../DrawerNav/DrawerNav';
import MyStack from '../StackNav/StackNav';

const RootNav = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};

export default RootNav;

const styles = StyleSheet.create({});
