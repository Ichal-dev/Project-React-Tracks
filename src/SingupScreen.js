import React, {useContext} from 'react';
import {View, StyleSheet} from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import {Context} from '../src/context/AuthContext';
import AuthForm from './components/AuthForm';
import NavLink from './components/NavLink';


const SingupScreen = ({navigation}) => {
  const {state, singup, clearErrorMessage} = useContext(Context);
  
  React.useEffect(
    () => navigation.addListener('blur', () => {
      clearErrorMessage();
    })
  )
  return (
    <View style={styles.container}>
      
        <AuthForm
      headerText = "Sing Up For Tracker"
      errorMessage= {state.errorMessage}
      submitButtonText="Sing Up"
      onSubmit = {singup}
      />
       <NavLink
       text = "Already have a count !! Sing in instead"
       routeName="Singin"
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

export default SingupScreen;
