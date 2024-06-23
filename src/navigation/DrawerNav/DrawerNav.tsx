import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {HomeScreen, NotificationScreen} from '../../screen';
import DrawerComponent from './DrawerComponent';
import MyTabs from '../BottomTab/BottomTab';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // eslint-disable-next-line react/no-unstable-nested-components
      drawerContent={props => <DrawerComponent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />

      <Drawer.Screen name="Notification" component={NotificationScreen} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
