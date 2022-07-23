import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native'
import Logo from '../header/Logo'

const Successful = () => {
    const successImage = require('../../assets/images/register/success.png');
  return (
    <View style={styles.container}>

       {/* LOGO */}
       <Logo/>

        <View>
            <Text style={{fontSize: 24, fontWeight: '600', fontFamily: 'sans', color: '#484848'}}>
                Congratulations!
            </Text>
            <Text style={{fontSize: 16, fontFamily: 'sans', paddingTop: 10, color: '#484848', marginRight: 60}}>
                Your account has been Successful created.
            </Text>
        </View>
        {/* Image */}
        <View style={styles.successImageContainer}>
            <Image style={styles.successImage} source={successImage}/>
        </View>
        
        
        <TouchableOpacity style={{backgroundColor: '#46BA7F', marginHorizontal: 'auto', justifyContent: 'center', paddingVertical: 10, paddingHorizontal: 30, borderRadius:20, marginTop: 100}}>
            <Text style={{fontSize: 18, fontWeight: 'bold', textAlign: 'center', color:'#fff'}}> 
                Continue
            </Text>
        </TouchableOpacity>
        
    </View>
  )
}

export default Successful



const styles = StyleSheet.create({
    container: {
        backgroundColor: '#95afaf41',
        height: 100,
        flex: 1,
        padding: 20
    },
    inputContainer: {
        backgroundColor: '#fff',
        width: 50,
        height: 60,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#fff',
    },
    successImage: {
        width: 312,
        height: 313
    },
    successImageContainer: {
        // marginVertical: 40
        top: 27,
        bottom: 38,
        left: 13,
        right: 13
    }
})