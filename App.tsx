import * as React from 'react';
import {  StyleSheet } from 'react-native';
import GlobalProvider from './src/context/reducers/Provider';
import AppNavContainer from './src/navigations';

const App = () => {
  return (
    <GlobalProvider>
      <AppNavContainer></AppNavContainer>
    </GlobalProvider>
  );
};

const styles = StyleSheet.create({
});

export default App;

