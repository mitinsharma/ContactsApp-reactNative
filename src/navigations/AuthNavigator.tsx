import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { LOGIN, REGISTER } from '../constants/routerNames';


const Login = () => {
  return (
    <View>
      <Text>Hi from login</Text>
    </View>
  );
}

const Signup = () => {
  return (
    <View>
      <Text>Hi from signup</Text>
    </View>
  );
}

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator>
      <AuthStack.Screen name={LOGIN} component={ Login }/>
      <AuthStack.Screen name={REGISTER} component={ Signup }/>
    </AuthStack.Navigator>
  );
};


export default AuthNavigator;