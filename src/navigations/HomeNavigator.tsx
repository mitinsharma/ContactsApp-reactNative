import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { CONTACT_DETAIL, CONTACT_LIST, CREATE_CONTACT, SETTINGS } from '../constants/routerNames';
import Contacts from '../screens/Contacts';
import ContactDetail from '../screens/Contacts/details';
import CreateContact from '../screens/Contacts/create';
import Settings from '../screens/Contacts/settings';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator  screenOptions={{ headerShown: false}}  initialRouteName={CONTACT_LIST}>
      <HomeStack.Screen name={CONTACT_LIST} component={Contacts}/>
      <HomeStack.Screen name={CONTACT_DETAIL} component={ ContactDetail }/>
      <HomeStack.Screen name={CREATE_CONTACT} component={ CreateContact}/>
      <HomeStack.Screen name={SETTINGS} component={ Settings}/>        
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;