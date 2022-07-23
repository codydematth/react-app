import React, { useState } from 'react'
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity,
    ScrollView,
    TextInput,
  } from 'react-native';
  import { Checkbox } from 'react-native-paper';

  interface IPricing {
    balance?: string;
    bgColor? : string;
    cardType? : string;
  }
const PaymentCard: React.FC <IPricing> = ({balance, bgColor, cardType}) => {
  const [box, setBox] = useState(false);
  return (
    <View style={{paddingTop: 20}}>

  <TouchableOpacity style={{backgroundColor: bgColor, borderRadius: 20, paddingVertical: 20, paddingHorizontal: 20, marginHorizontal: 15,}}>
    <View>
        <Text style={{color: '#fff', fontSize: 18}}>
        {cardType}
        </Text>
        <Text style={{color: '#fff', fontSize: 18}}>
        ₦ {balance}
        </Text>
    </View>
    <View style={{position: 'absolute', right: 20, bottom: 35}}>
      <Checkbox checked={false} color={'black'}/>
    </View>
  </TouchableOpacity>
  
    </View>
    
  )
}

export default PaymentCard

PaymentCard.defaultProps={
    bgColor: 'black',
    balance: '0.00',
    cardType: 'Primary'


}
const styles = StyleSheet.create({
    pricingContainer: {
        justifyContent: 'center',
        textAlign: 'center',
      },
})