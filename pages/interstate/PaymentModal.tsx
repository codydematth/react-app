import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native'

interface IPayment{
  amount? : string
  buttonText? : string
}

const PaymentModal: React.FC <IPayment> = ({amount, buttonText}) => {
  return (
   <View style={styles.container}>
    <View style={styles.textContainer}>
      <Text style={{fontSize: 16}}>
        Price
      </Text>
      <Text style={{color: '#46BA7F', fontSize: 24, fontWeight: 'bold' }}>
        {amount}
      </Text>
    </View>
    {/* Button */}
    <TouchableOpacity style={{backgroundColor: '#46BA7F', justifyContent: 'center', paddingVertical: 15, paddingHorizontal: 50, borderRadius:20, marginRight: 10, }}>
            <Text style={{fontSize: 24, fontWeight: 'bold', textAlign: 'center', color:'#fff'}}> 
                {buttonText}
            </Text>
        </TouchableOpacity>
   </View>
  )
}

export default PaymentModal

PaymentModal.defaultProps= {
  amount: '₦5,000.00',
  buttonText: 'Continue'
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    paddingTop: 20,
    paddingBottom: 10,
    borderRadius: 20
  },
  textContainer: {
    marginHorizontal: 15,
  }

})