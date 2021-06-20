import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import {Text, Button} from 'react-native-elements';
import {Context} from './context/AuthContext';

const AccountScreen = () => {
  const {singout} = useContext(Context);

  return (
    <View>
      <Text h1>Account Screen</Text>
      <Button title="Sing Out" onPress={logout => singout(logout)} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
