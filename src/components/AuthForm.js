import React, {useState} from 'react';
import {Text, Button, Input} from 'react-native-elements';
import {StyleSheet} from 'react-native';


const AuthForm = ({headerText, errorMessage, onSubmit, submitButtonText}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <>
      <Text h2>{headerText}</Text>
      <Input
        style={styles.input}
        label="Email"
        value={email}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newEmail => setEmail(newEmail)}
      />
      <Input
        style={styles.input}
        secureTextEntry={true}
        label="password"
        value={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={newPassword => setPassword(newPassword)}
      />
      {errorMessage ? (
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      ) : null}
      <Button title={submitButtonText} onPress={() => onSubmit({email, password})} />
   </>
    )

}


const styles = StyleSheet.create({
    errorMessage: {
        fontSize: 16,
        color: 'red',
      },
})

export default AuthForm;