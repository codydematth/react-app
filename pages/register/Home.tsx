import React from 'react'
import { StyleSheet, Text, View,} from 'react-native';
import HomeButtons from './HomeButtons';
import Logo from '../header/Logo';

const Home = () => {
  return (
    <View style={styles.home}>
        {/* LOGO */}
       <Logo/>
       
        <View>
            <Text style={{fontSize: 24, fontWeight: '600', fontFamily: 'sans', color: '#484848'}}>
                What Kind of user are you?
            </Text>
            <Text style={{fontSize: 16, fontFamily: 'sans', paddingTop: 10, color: '#484848', marginRight: 30}}>
                We will adapt the app to suit your needs.
            </Text>
        </View>
        <HomeButtons/>
        <HomeButtons title='E-commerce' color='#46BA7F'/>
        
    </View>
  )
}

export default Home



const styles = StyleSheet.create({
    home: {
        backgroundColor: '#95afaf41',
        height: 100,
        paddingTop: 40,
        flex: 1,
        padding: 20
    },
})