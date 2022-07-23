import React, { useRef } from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import RegistrationButtons from './RegistrationButtons';
import PhoneInput from 'react-native-phone-number-input';
import Logo from '../header/Logo';

interface IRegister {
  name?: string;
  email?: string;
  phone?: string;
}
const Register: React.FC<IRegister> = ({ name, email, phone }) => {
  return (
    <View style={styles.home}>
      {/* LOGO */}
      <Logo />

      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            fontFamily: 'sans',
            color: '#484848',
          }}>
          Welcome!
        </Text>
        <Text
          style={{
            fontSize: 16,
            marginRight: 60,
            fontFamily: 'sans',
            paddingTop: 10,
            color: '#484848',
          }}>
          Create an account to get started with Cargo Express
        </Text>
      </View>

      {/* Form Inputs */}
      <View>
        <Text style={styles.textLabel}> {name}</Text>
        <TextInput style={styles.textInput} />
      </View>
      <View>
        <Text style={styles.textLabel}> {email}</Text>
        <TextInput style={styles.textInput} textContentType='emailAddress' />
      </View>
      <View>
        <Text style={styles.textLabel}> {phone}</Text>
        <PhoneInput
          defaultCode='NG'
          layout='first'
          containerStyle={[styles.phoneInput, { width: 'auto', height: 20 }]}
          textContainerStyle={{
            paddingVertical: 0,
            marginRight: 30,
            borderRadius: 20,
            backgroundColor: '#fff',
          }}
          textInputStyle={{ width: 100, height: 25 }}
        />
      </View>
      <View>
        <Text style={styles.textLabel}> Password</Text>
        <TextInput
          style={styles.textInput}
          textContentType='password'
          secureTextEntry={true}
          maxLength={16}
        />
      </View>
      <View>
        <Text style={styles.textLabel}> Confirm Password</Text>
        <TextInput
          style={styles.textInput}
          textContentType='password'
          secureTextEntry={true}
          maxLength={16}
        />
      </View>
      <View>
        <Text
          style={{
            marginLeft: 26,
            fontWeight: '100',
            paddingTop: 24,
            color: '#484848',
            fontSize: 16,
          }}>
          {' '}
          Already have an account?{' '}
          <Text style={{ color: '#46BA7F', fontWeight: 'bold' }}> Log In</Text>
        </Text>
      </View>

      {/* Buttons */}
      <View
        style={{
          paddingTop: 20,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <RegistrationButtons title='Back' bgColor='#95afaf41' color='black' />
        <RegistrationButtons title='Next' bgColor='#46BA7F' />
      </View>
    </View>
  );
};

export default Register;

Register.defaultProps = {
  name: 'Full Name',
  email: 'Your Email',
  phone: 'Phone Number',
};

const styles = StyleSheet.create({
  home: {
    backgroundColor: '#95afaf41',
    height: 100,
    paddingTop: 40,
    flex: 1,
    padding: 30,
  },
  textLabel: {
    fontSize: 16,
    color: '#484848',
    paddingTop: 24,
    fontWeight: 'bold',
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccaca',
    flex: 1,
    paddingVertical: 10,
    marginTop: 10,
  },
  phoneInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flex: 1,
    marginTop: 10,
  },
});
