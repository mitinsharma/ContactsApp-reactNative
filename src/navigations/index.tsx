import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthNavigator from './AuthNavigator';
import HomeNavigator from './HomeNavigator';
import DrawerNavigator from './DrawerNavigator';
import { GlobalContext } from '../context/reducers/Provider';
import { useContext } from 'react';

const AppNavContainer = () => {
  //const isLoggedIn = true;
  const {
    authState: {isLoggedIn},
  } = useContext(GlobalContext);
  console.log('isLoggedIn :>>> ', isLoggedIn);

  return (
    <NavigationContainer>
      { isLoggedIn? <DrawerNavigator/> :<AuthNavigator/> }
      
      {/* <HomeNavigator/> */}
      {/* <DrawerNavigator/> */}
  </NavigationContainer>
  );
};


// Screens >>> Home >>> Drawer
// Screens >>> Auth

export default AppNavContainer;