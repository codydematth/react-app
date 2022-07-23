import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import RegistrationButtons from './RegistrationButtons';
import PhoneInput from 'react-native-phone-number-input';
import Logo from '../header/Logo';

interface ISignIn {
  emailValue?: string;
}
const SignIn: React.FC<ISignIn> = (emailValue) => {
  const [email, setEmail] = useState('');
  const onchange = (emailValue) => setEmail(emailValue);
  return (
    <View style={styles.home}>
      {/* LOGO */}
      <Logo />

      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            fontFamily: 'sans',
            color: '#484848',
          }}>
          Sign In
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontFamily: 'sans',
            paddingTop: 10,
            color: '#484848',
          }}>
          Sign in to continue to Cargo Express
        </Text>
      </View>

      {/* Form Inputs */}
      <View>
        <Text style={styles.textLabel}> Phone Number/ E-mail</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View>
        <Text style={styles.textLabel}> Password</Text>
        <TextInput
          onChangeText={onchange}
          style={styles.textInput}
          textContentType='password'
          secureTextEntry={true}
          maxLength={16}
        />
      </View>

      <View>
        <Text
          style={{
            textAlign: 'center',
            fontWeight: 'bold',
            paddingTop: 24,
            color: '#46BA7F',
            fontSize: 16,
            textDecorationLine: 'underline',
          }}>
          Create an Account
        </Text>
      </View>

      {/* Buttons */}
      <View
        style={{
          paddingTop: 20,
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#46BA7F',
            marginHorizontal: 'auto',
            justifyContent: 'center',
            paddingVertical: 20,
            paddingHorizontal: 45,
            borderRadius: 20,
            marginTop: 50,
          }}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              textAlign: 'center',
              color: '#fff',
            }}>
            Sign In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#95afaf41',
    height: 100,
    paddingTop: 40,
    flex: 1,
    padding: 20,
    fontFamily: 'Poppins',
  },
  textLabel: {
    fontSize: 16,
    color: '#484848',
    paddingTop: 24,
    fontWeight: '200',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccaca',
    flex: 1,
    paddingVertical: 10,
    marginTop: 5,
  },
});
