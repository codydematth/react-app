import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import PaymentModal from '../interstate/PaymentModal';
// import RNPickerSelect from 'react-native-picker-select';

const SameState = () => {
  // const items = [
  //   { label: 'Ekiti', value: 'ekiti' },
  //   { label: 'Ondo', value: 'ondo' },
  //   { label: 'Osun', value: 'osun' },
  //   { label: 'Lagos', value: 'lagos' },
  //   { label: 'Kwara', value: 'kwara' },
  //   { label: 'Kogi', value: 'kogi' },
  // ];
  return (
    <View style={styles.container}>
        <ScrollView>
      {/* Close Icon */}
      <View style={{ flexDirection: 'row', padding: 15 }}>
        <Ionicons
          name='close'
          size={40}
          color='black'
          style={{ position: 'absolute' }}
        />
        <Text style={styles.bookingText}> Quick Booking</Text>
      </View>

      {/* Delivery Information */}
      <View style={{ paddingTop: 30,  marginHorizontal: 20 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Delivery Information
        </Text>
      </View>
      <TouchableOpacity style={styles.selectContainer}>
        <Text style={styles.textInputSelect}>Delivery Location</Text>
        <Ionicons
          name='chevron-forward-sharp'
          size={18}
          style={{ marginRight: 30 }}
        />
      </TouchableOpacity>

      {/* Form Inputs */}
      <View style={{ marginHorizontal: 15 }}>
        <Text style={styles.textLabel}> Reciever's name</Text>
        <TextInput style={styles.textInput} />
      </View>

      <View style={{ marginHorizontal: 15 }}>
        <Text style={styles.textLabel}> Receiver's phone number</Text>
        <TextInput style={styles.textInput} />
      </View>

      {/* Sender Information */}
      <View style={{ paddingTop: 30, paddingLeft: 10, marginHorizontal: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
          Sender's Information
        </Text>
      </View>
      {/* Sender Details with Edit Icon */}
      <View style={styles.inputContainer}>
        <View>
          <Text style={styles.textLabel}> Name</Text>
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between'}, styles.textInput]}>
            <Text style={{ paddingLeft: 15, marginVertical: 'auto', color: '#1F1F1F' }}>
              John Doe
            </Text>
            <Image
              source={require('../../assets/images/sameStateIcon/edit.png')}
              style={styles.cardImage}
              resizeMode='cover'
            />
          </View>
        </View>

        <View>
          <Text style={styles.textLabel}> Phone number</Text>
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.textInput]}>
            <Text style={{ paddingLeft: 15, marginVertical: 'auto', color: '#1F1F1F' }}>
            +2348108960610
            </Text>
            <Image
              source={require('../../assets/images/sameStateIcon/edit.png')}
              style={styles.cardImage}
              resizeMode='cover'
            />
          </View>
        </View>
        <View>
          <Text style={styles.textLabel}> Email address</Text>
          <View style={[{ flexDirection: 'row', justifyContent: 'space-between' }, styles.textInput]}>
            <Text style={{ paddingLeft: 15, marginVertical: 'auto', color: '#1F1F1F'}}>
            johndoe@gmail.com
            </Text>
            <Image
              source={require('../../assets/images/sameStateIcon/edit.png')}
              style={styles.cardImage}
              resizeMode='cover'
            />
          </View>
        </View>
      </View>
      {/* Pickup Location */}
      <TouchableOpacity style={styles.selectContainer}>
        <Text style={styles.textInputSelect}>Pick-up Location</Text>
        <Ionicons
          name='chevron-forward-sharp'
          size={18}
          style={{ marginRight: 30 }}
        />
      </TouchableOpacity>

      {/* Button */}

      <TouchableOpacity style={styles.btnContainer}>
        <Text style={styles.btnText}>Get Quote</Text>
      </TouchableOpacity>


    </ScrollView>
      {/* <PaymentModal/> */}
    </View>
  );
};

export default SameState;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    fontFamily: 'Poppins',
    height: 100,
    paddingTop: 40,
    flex: 1,
    color: '#484848',
  },
  bookingText: {
    paddingTop: 10,
    marginLeft: 100,
    fontSize: 18,
  },
  textInputSelect: {
    marginLeft: 15,
    fontSize: 15,
    textAlign: 'center',
  },
  selectContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    marginTop: 10,
    marginHorizontal: 15,
  },
  textLabel: {
    fontSize: 16,
    color: '#000',
    paddingTop: 24,
    fontWeight: '200',
    marginLeft: 5,
  },
  textInput: {
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#cccaca',
    flex: 1,
    paddingVertical: 10,
    marginTop: 5,
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
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  cardImage: {
    width: 20,
    height: 20,
    marginRight: 20
  },
  inputContainer: {
    marginHorizontal: 15,
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
