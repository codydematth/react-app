import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import SelectList from 'react-native-dropdown-select-list';
import Card from './Card';
import Slides from './packageSlide/Slides';
// import RNPickerSelect from 'react-native-picker-select';

const Interstate = () => {
  const [selected, setSelected] = React.useState('');
  const items = [
    { key: '1',  value: 'EKITI' },
    { key: '2',  value: 'ONDO' },
    { key: '3',  value: 'OSUN' },
    { key: '4',  value: 'LAGOS' },
    { key: '5',  value: 'KWARA' },
    { key: '6',  value: 'KOGI' },
  ];
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Close Icon */}
        <View style={{ flexDirection: 'row', padding: 20 }}>
          <Ionicons
            name='close'
            size={40}
            color='black'
            style={{ position: 'absolute' }}
          />
          <Text style={styles.bookingText}> Quick Booking</Text>
        </View>
        {/* Choose State */}
        <View style={{ paddingTop: 40, paddingLeft: 30, paddingRight: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Which state are you sending to?
          </Text>
        </View>
        <TouchableOpacity style={{ marginHorizontal: 20, marginTop: 20 }}>
          <View
            style={{
              backgroundColor: '#fff',
              borderRadius: 20,
              borderColor: '#fff',
              flex: 1,
            }}>
            <SelectList
              data={items}
              setSelected={setSelected}
              boxStyles={{ borderWidth: 0 }}
              inputStyles= {{fontSize: 16, fontFamily: 'arial', marginVertical:'auto' }}
              dropdownStyles = {{borderWidth: 0, backgroundColor: 'gray'}}
              dropdownItemStyles ={{marginHorizontal: 20}}
              dropdownTextStyles ={{color: '#fff'}}
              placeholder= "Select State"
              maxHeight= {100}
            />
          </View>
        </TouchableOpacity>

        {/* Express Card */}
        <Card
          cardTitle='Would you like it express?'
          cardDescription='Have your parcel delivered within 24 hours.'
          cardRadioBtn={true}
        />
        {/* Delivery Information */}
        <View style={{ paddingTop: 30, paddingLeft: 10, marginHorizontal: 20 }}>
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
        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.textLabel}> Reciever's name</Text>
          <TextInput style={styles.textInput} />
        </View>

        <View style={{ marginHorizontal: 20 }}>
          <Text style={styles.textLabel}> Receiver's phone number</Text>
          <TextInput style={styles.textInput} />
        </View>
        {/* Delivery Type */}
        <View style={{ paddingTop: 20, paddingLeft: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Choose a delivery type
          </Text>
        </View>
        {/* DoorStep Card */}
        <Card
          cardTitle='Doorstep delivery'
          cardDescription='Your package will be delivered to the doorstep of your receiver.'
          cardRadioBtn={true}
          bgColor='#F3F4B7'
          opacity={0.9}
        />
        {/* Self Pick up */}
        <Card
          cardTitle='Self pick-up '
          cardDescription='The receiver would pick-up the package at an ABC terminal.'
          cardRadioBtn={true}
          bgColor='#CBF0D8'
          opacity={0.9}
        />

        {/* 
        SLIDES HERE*/}

        <View style={{ paddingTop: 20, paddingLeft: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            What are you sending?
          </Text>
        </View>
        <View style={{ paddingTop: 10, marginLeft: 20 }}>
          <Slides />
        </View>

        {/* Home Pick Up*/}
        <View style={{ paddingTop: 20, paddingLeft: 10, marginHorizontal: 20 }}>
          <Text style={{ fontSize: 18, fontWeight: 'bold' }}>
            Choose a Pick-up point
          </Text>
        </View>

        <Card
          cardTitle='Home pick-up '
          cardDescription='We wil come pick up your package wherever you are.'
          bgColor='#FFDADA'
          opacity={1}
        />
        {/* Self Drop*/}
        <Card
          cardTitle='Self-drop '
          cardDescription='You would bring the package to an ABC terminal.'
          bgColor='#CBF0D8'
          opacity={1}
        />

        {/* Button */}

        <TouchableOpacity style={styles.btnContainer}>
          <Text style={styles.btnText}>Get Quote</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Interstate;

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
    marginHorizontal: 20,
  },
  selectStateContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingVertical: 5,
    marginTop: 10,
    marginHorizontal: 20,
  },
  textLabel: {
    fontSize: 16,
    color: '#000',
    paddingTop: 24,
    fontWeight: '200',
    marginLeft: 10,
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
    fontSize: 16,
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
