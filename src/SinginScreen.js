import React, {useState, useContext} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';
import {Context} from './context/AuthContext';

const SinginScreen = () => {

 const {state, singin} = useContext(Context);


  return (
    <View style={styles.container}>
    <AuthForm
    headerText= "Sing In Your Account"
    errorMessage={state.errorMessage}
    onSubmit = {singin}
    submitButtonText= "Sing In"
    />
    <NavLink
      text= "Dont Have a account ? Sing up instead"
      routeName= "Singup"
    />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 15,
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default SinginScreen;
