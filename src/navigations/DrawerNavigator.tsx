import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeNavigator from './HomeNavigator';
import { HOME_NAVIGATOR } from '../constants/routerNames';

const DrawerNavigator = () => {
  const Drawer = createDrawerNavigator();
  return (
      <Drawer.Navigator>
        <Drawer.Screen name={HOME_NAVIGATOR} component={ HomeNavigator }/>
      </Drawer.Navigator>
  );
};

export default DrawerNavigator;