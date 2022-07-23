import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

const Logo = () => {
  return (
    <View style={{ marginTop: 10, marginBottom: 60 }}>
      <Image
        style={styles.logo}
        source={require('../../assets/images/logo/cargoLogo.png')}
      />
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({
  logo: {
    width: 60,
    height: 38,
    color: 'black',
    resizeMode: 'cover',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    tintColor: 'black',
  },
});
