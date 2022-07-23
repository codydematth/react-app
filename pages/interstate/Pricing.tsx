import React from 'react';
import PaymentModal from './PaymentModal';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';

interface IPricing {
  amount?: string;
  discount?: string;
  id?: number;
  packageName?: string;
  price?: string;
}
const Pricing: React.FC<IPricing> = ({ amount, discount }) => {
  const pricingData = [
    {
      id: 1,
      packageName: 'Interstate Delivery',
      price: '₦2,000',
    },
    {
      id: 1,
      packageName: 'Doorstep Delivery',
      price: '₦500',
    },
    {
      id: 1,
      packageName: 'Home Pickup',
      price: '₦500',
    },
    {
      id: 1,
      packageName: 'Electronic',
      price: '₦2,000',
    },
  ];

  const lastCell = pricingData[3];
  return (
    <View style={styles.container}>
      {/* Start Scroll View */}
      <View>
        <ScrollView>
          <View style={styles.pricingContainer}>
            <Text style={{ fontSize: 20, marginBottom: 10 }}>
              Total waybill Cost
            </Text>
            <Text
              style={{ fontSize: 30, color: '#46BA7F', fontWeight: 'bold' }}>
              {(amount = '₦ 10,000')}
            </Text>
          </View>
          {/* Discount Input */}
          <View style={{ paddingTop: 30, marginHorizontal: 15 }}>
            <Text style={{ fontSize: 22, color: '#000' }}>Discount Code</Text>
          </View>
          <View style={styles.discountContainer}>
            <TextInput
              style={styles.textInput}
              placeholder='Enter discount code'
            />
            <TouchableOpacity style={styles.applyBtn}>Apply</TouchableOpacity>
          </View>
          {/* Details */}
          <View style={{ paddingTop: 30, marginHorizontal: 15 }}>
            <Text style={{ fontSize: 22 }}>Details</Text>
          </View>
          <View style={styles.discountDetailsContainer}>
            <Text style={styles.discountDetailsText}> Discount </Text>
            <Text style={[{ marginLeft: 100 }, styles.discountDetailsText]}>
              {(discount = '₦ 0: 00')}
            </Text>
          </View>

          {/* Pricing Table */}
          <View style={styles.pricingTableContainer}>
            <View style={styles.pricingNameTable}>
              <Text style={styles.pricingTableText}> Name </Text>
              <Text style={[{ marginLeft: 150 }, styles.pricingTableText]}>
                John Doe
              </Text>
            </View>
            {/* packages Pricing */}
            {pricingData.map(({ packageName, price }) => {
              return (
                <View key={pricingData.id} style={styles.pricingTable}>
                  <Text style={styles.pricingTableText}> {packageName} </Text>
                  <Text
                    style={[
                      { right: 70, position: 'absolute' },
                      styles.pricingTableText,
                    ]}>
                    {price}
                  </Text>
                </View>
              );
            })}
          </View>
        </ScrollView>
      </View>
      {/* End Scroll View */}

      {/* Button */}
      <View style={{ marginTop: 70 }}>
        <PaymentModal />
      </View>
    </View>
  );
};

export default Pricing;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    fontFamily: 'Poppins',
    height: 100,
    paddingTop: 30,
    flex: 1,
    color: '#484848',
  },
  pricingContainer: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  btnContainer: {
    backgroundColor: '#46BA7F',
    marginHorizontal: 'auto',
    justifyContent: 'center',
    paddingVertical: 20,
    paddingHorizontal: 90,
    borderRadius: 20,
    marginTop: 50,
    marginBottom: 20,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  textInput: {
    backgroundColor: '#F3F4B7',
    fontSize: 14,
    paddingHorizontal: 20,
    borderRadius: 20,
    paddingVertical: 20,
  },
  discountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginHorizontal: 15,
  },
  applyBtn: {
    backgroundColor: '#46BA7F',
    color: '#fff',
    borderRadius: 20,
    paddingHorizontal: 30,
    paddingVertical: 20,
    right: 10,
  },
  discountDetailsText: {
    fontSize: 16,
    paddingHorizontal: 15,
  },
  discountDetailsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  pricingTable: {
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderTopWidth: 1,
    borderColor: '#eceaeaa4',
  },
  pricingTableContainer: {
    paddingHorizontal: 10,
    marginTop: 10,
    marginHorizontal: 15,
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  pricingTableText: {
    fontSize: 16,
    paddingVertical: 15,
  },
  pricingNameTable: {
    flexDirection: 'row',
    paddingHorizontal: 15,
  },
});
