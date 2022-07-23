import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Logo from '../header/Logo';
interface Iverify {
  number?: string;
  timer?: string;
}
const Verification: React.FC<Iverify> = ({ number, timer }) => {
  // const logo = require('../logocargo.png');
  return (
    <View style={styles.container}>
      <View>
        {/* LOGO */}
        <Logo />
      </View>
      <View>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            fontFamily: 'sans',
            color: '#484848',
          }}>
          Verification!
        </Text>
        <Text
          style={{
            fontSize: 16,
            fontFamily: 'sans',
            paddingTop: 10,
            color: '#484848',
            marginRight: 60,
          }}>
          We sent you an{' '}
          <Text style={{ color: '#0ed8c7', margin: 0, padding: 0 }}>SMS</Text>{' '}
          code on number <Text style={{ color: '#0ed8c7' }}>{number}</Text>
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignContent: 'center',
          paddingTop: 20,
          marginBottom: 20,
        }}>
        <View style={styles.inputContainer}>
          <TextInput style={{ width: '100', height: 100 }} />
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={{ width: '100', height: 100 }} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={{ width: '100', height: 100 }} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={{ width: '100', height: 100 }} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={{ width: '100', height: 100 }} />
        </View>
      </View>
      <Text style={{ color: 'red', textAlign: 'right', marginHorizontal: 20 }}>
        {' '}
        {timer}
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            textAlign: 'center',
            textDecorationLine: 'underline',
            marginVertical: 30,
          }}>
          {' '}
          Resend Code
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#46BA7F',
          marginHorizontal: 'auto',
          justifyContent: 'center',
          paddingVertical: 10,
          paddingHorizontal: 15,
          borderRadius: 100,
        }}>
        <Text style={{ fontSize: 18, textAlign: 'center' }}>
          <Icon name='arrow-right' size={20} color='#fff' />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verification;

Verification.defaultProps = {
  number: '+2348101234567',
  timer: '00.50',
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#95afaf41',
    height: 100,
    paddingTop: 40,
    flex: 1,
    padding: 20,
  },
  inputContainer: {
    backgroundColor: '#fff',
    width: 50,
    height: 60,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#fff',
  },
});
