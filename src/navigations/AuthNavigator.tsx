import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routerNames';
import Login from '../screens/Authentication/Login';
import Register from '../screens/Authentication/Register';





const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name={LOGIN} component={ Login }/>
      <AuthStack.Screen name={REGISTER} component={ Register }/>
    </AuthStack.Navigator>
  );
};


export default AuthNavigator;