import React from 'react';
import { View, Text, Image } from 'react-native';

const PaymentPreload = () => {
  return (
    <View>
      <View style={{ marginTop: 200, marginHorizontal: 'auto' }}>
        <Image
          source={require('../../assets/images/paymentPreload/preload.png')}
          style={{ width: 150, height: 150 }}
        />
      </View>
      <View style={{ marginHorizontal: 'auto', width: 300, left: 50 }}>
        <Text style={{ textAlign: 'center', fontSize: 22, marginRight: 80 }}>
          Should be ready in a minute...
        </Text>
      </View>
    </View>
  );
};

export default PaymentPreload;
