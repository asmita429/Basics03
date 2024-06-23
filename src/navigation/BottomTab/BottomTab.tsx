/* eslint-disable react/no-unstable-nested-components */
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {CartScreen, ContactScreen, QuoteScreen} from '../../screen';
import MyDrawer from '../DrawerNav/DrawerNav';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen
        name="MyDrawer"
        component={MyDrawer}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabel: 'Contact',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="phone" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Quote"
        component={QuoteScreen}
        options={{
          tabBarLabel: 'Quotes',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="comment-quote-outline"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
