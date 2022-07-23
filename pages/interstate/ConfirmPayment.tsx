import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import PaymentCard from './PaymentCard';

interface IPricing {
  amount?: string;
}
const ConfirmPayment: React.FC<IPricing> = ({ amount }) => {
  return (
    <View style={{ paddingTop: 20 }}>
      <View style={styles.pricingContainer}>
        <Text style={{ fontSize: 20, marginBottom: 10 }}>
          Total waybill Cost
        </Text>
        <Text style={{ fontSize: 30, color: '#46BA7F', fontWeight: 'bold' }}>
          {(amount = '₦ 50,000')}
        </Text>
      </View>
      {/* Discount Input */}
      <View style={{ paddingTop: 30, marginHorizontal: 15, marginBottom: 20 }}>
        <Text style={{ fontSize: 22, color: '#000' }}>
          Choose Payment Method
        </Text>
      </View>

      {/* PAYMENT CARDS */}
      <PaymentCard />
      <PaymentCard bgColor='#F7F49C' cardType='Secondary Card' balance='0.00' />
      <PaymentCard bgColor='#F79C9C' cardType='Tertiary Card' balance='0.00' />
      {/* BUTTON */}
      <View style={{ marginTop: 100 }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#46BA7F',
            borderRadius: 20,
            paddingHorizontal: 40,
            paddingVertical: 20,
            marginHorizontal: 15,
          }}>
          <Text style={{ fontSize: 20, color: '#fff' }}>Confirm Payment</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ConfirmPayment;
const styles = StyleSheet.create({
  pricingContainer: {
    justifyContent: 'center',
    textAlign: 'center',
  },
});
