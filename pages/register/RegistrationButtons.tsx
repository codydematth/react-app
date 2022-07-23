import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
interface IButtons {
  title?: string;
  bgColor?: string;
  color? : string;
}

const RegistrationButtons: React.FC<IButtons> = ({ title, bgColor, color }) => {
  return (
    <View>
      {/* REGISTRATION BUTTON */}
      <TouchableOpacity
        style={[
          { backgroundColor: bgColor },
          styles.registrationButtonDefault,
        ]}>
        <Text
          style={[
            {
            color: color},
            styles.buttonDefaultText
        ]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default RegistrationButtons;

RegistrationButtons.defaultProps = {
  title: 'Success',
  bgColor: '#46BA7F',
  color: 'white'
};

const styles = StyleSheet.create({
  registrationButtonDefault: {
    marginTop: 10,
    width: 120,
    borderRadius: 20,
    paddingVertical: 20,
    margin: 10,
    borderWidth: 1,
    borderColor: '#fff',
  },
  buttonDefaultText: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    fontFamily: 'sans',
  },
});
