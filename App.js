import React, {forwardRef} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Router from './src/router';
import {Provider} from './src/context/AuthContext';
import {navigationRef} from './src/RootNavigation';
import {Provider as LocationProvider} from './src/context/LocationContext';

const App = () => {
  return (
    <LocationProvider>
      <Provider>
        <NavigationContainer ref={navigationRef}>
          <Router />
        </NavigationContainer>
      </Provider>
    </LocationProvider>
  );
};

export default forwardRef(App);
