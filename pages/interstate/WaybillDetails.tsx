import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Icon from 'react-native-vector-icons/FontAwesome5';
import DeliveryInfo from './DeliveryInfo';
import InfoCard from './InfoCard';
// import RNPickerSelect from 'react-native-picker-select';

interface IWaybill {
  day?: string;
}

const WaybillDetails: React.FC<IWaybill> = ({ day }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', padding: 15 }}>
        {/* Close Icon */}
        <View>
          <Ionicons
            name='close'
            size={40}
            color='black'
            //   style={{ position: 'absolute' }}
          />
        </View>

        {/* ADD PACKAGE */}
        <TouchableOpacity style={styles.addPackage}>
          <Icon name='plus-circle' size={26} color='#fff' />
          <Text
            style={{
              fontSize: 18,
              color: '#fff',
              margin: 'auto',
              paddingLeft: 10,
            }}>
            Add Package
          </Text>
        </TouchableOpacity>
      </View>
      {/* Waybill Detail Title Row  with Edit icon*/}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginHorizontal: 15,
          marginVertical: 30,
        }}>
        <Text style={{ fontSize: 20 }}>Waybill Details</Text>
        {/* Edit Image  Plus Text*/}
        <View style={{ bottom: 10 }}>
          <Text style={{ color: '#46BA7F', fontSize: 20, fontWeight: '300' }}>
            <Image
              source={require('../../assets/images/sameStateIcon/edit.png')}
              style={{ width: 25, height: 25, tintColor: '#46BA7F', top: 4 }}
              resizeMode='cover'
            />
            Edit
          </Text>
        </View>
      </View>
      {/* Start Scroll View */}
      <View>
        <ScrollView>
          <View style={styles.estimateContainer}>
            <Text style={{ fontSize: 16 }}>Estimated Delivery</Text>
            <Text style={{ fontSize: 18, color: '#46BA7F' }}>
              {(day = 'June, 5')}
            </Text>
          </View>

          {/* Delivery Information */}
          <DeliveryInfo title='Location' input='Lagos, Nigeria' />
          <DeliveryInfo
            title='Delivery type'
            input='Doorstep delivery'
            bgColor='#F3F4B7'
          />
          <DeliveryInfo title='Pickup type' input='Home Pick-up' />
          <DeliveryInfo title='Package Description' input='Electronic' />

          {/* Receiver’s Information */}
          <View style={{ paddingTop: 30, marginHorizontal: 15 }}>
            <Text style={{ fontSize: 18 }}>Receiver’s Information</Text>
          </View>

          {/* Receiver's Card */}
          <InfoCard
            name='John Doe'
            number='+2348108960610'
            address='N0.2 Jasmine street, Lekki, Lagos, Nigeria.'
            bgColor='#F5F4EF'
          />

          {/* Sender's Information */}
          <View style={{ paddingTop: 30, marginHorizontal: 15 }}>
            <Text style={{ fontSize: 18 }}>Sender's Information</Text>
          </View>
          {/* Sender Card */}
          <InfoCard
            name='John Doe'
            number='+2348108960610'
            address='N0.2 Jasmine St. Yaba, Lagos.'
            bgColor='#EFF5EF'
            editIcon={true}
          />

          {/* Button */}

          <TouchableOpacity style={styles.btnContainer}>
            <Text style={styles.btnText}>Continue</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
      {/* End Scroll View */}
    </View>
  );
};

export default WaybillDetails;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    fontFamily: 'Poppins',
    height: 100,
    paddingTop: 30,
    flex: 1,
    color: '#484848',
  },
  bookingText: {
    paddingTop: 10,
    marginLeft: 100,
    fontSize: 18,
  },
  estimateContainer: {
    justifyContent: 'center',
    textAlign: 'center',
  },
  addPackage: {
    backgroundColor: '#46BA7F',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    marginLeft: 60,
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
});

// const customPickerStyles = StyleSheet.create({
//   inputIOS: {
//     fontSize: 14,
//     paddingVertical: 10,
//     paddingHorizontal: 12,
//     borderWidth: 1,
//     borderColor: 'green',
//     borderRadius: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },
//   inputAndroid: {
//     fontSize: 14,
//     paddingHorizontal: 10,
//     paddingVertical: 8,
//     borderWidth: 1,
//     borderColor: 'blue',
//     borderRadius: 8,
//     color: 'black',
//     paddingRight: 30, // to ensure the text is never behind the icon
//   },

// });
