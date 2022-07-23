import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
interface IButtons {
  title?: string;
  color?: string;
}

const HomeButtons: React.FC<IButtons> = ({ title, color }) => {
  return (
    <View>
      {/* HOME BUTTON */}
      <TouchableOpacity
        style={[{ backgroundColor: color }, styles.homeButtonDefault]}>
        <Text
          style={{
            color: 'white',
            fontSize: 38,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {' '}
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeButtons;

HomeButtons.defaultProps = {
  title: 'Personal',
  color: 'red',
};

const styles = StyleSheet.create({
  homeButtonDefault: {
    marginTop: 30,
    marginHorizontal: 0,
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 40,
    margin: 10,
  },
});
