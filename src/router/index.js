import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SinginScreen from '../../src/SinginScreen';
import SingupScreen from '../../src/SingupScreen';
import TrackCreateScreen from '../../src/TrackCreateScreen';
import TrackListScreen from '../../src/TrackListScreen';
import TrackDetailScreen from '../../src/TrackDetailScreen';
import AccountScreen from '../../src/AccountScreen';
import ResolveAuthScreen from './ResolveAuthScreen';

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();
const Auth = createStackNavigator();

const Authetication = () => {
  return (
    <Auth.Navigator>
      <Auth.Screen
        name="Singup"
        component={SingupScreen}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="Singin"
        component={SinginScreen}
        options={{headerShown: false}}
      />
    </Auth.Navigator>
  );
};

const MainApp = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="TrackCreate" component={TrackCreateScreen} />
      <Tabs.Screen name="TrackList" component={TrackListScreen} />
      <Tabs.Screen name="Account" component={AccountScreen} />
    </Tabs.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator initialRouteName="Resolve">
      <Stack.Screen
        name="Resolve"
        component={ResolveAuthScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Auth"
        component={Authetication}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />
      <Stack.Screen name="TrackDetail" component={TrackDetailScreen} />
    </Stack.Navigator>
  );
};

export default Router;
