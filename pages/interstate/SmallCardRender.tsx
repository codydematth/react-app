import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
  import { SmallCard } from './SmallCard';

  interface ICard {
    heading? : string
    description? : string
  }
const SmallCardRender: React.FC <ICard> = ({heading, description}) => {
  return (
    <View>
       <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{heading}</Text>
            <View
              style={{
                borderBottomColor: '#46BA7F',
                borderBottomWidth: 3,
                width: 20,
                marginHorizontal: 15,
              }}></View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
            {/* ICON */}
            <Text
              style={{
                fontSize: 18,
                textAlign: 'center',
                backgroundColor: '#000',
              }}>
              <Ionicons
                name='arrow-forward-circle'
                size={18}
                color='#000'
                style={{
                  marginLeft: 60,
                  position: 'absolute',
                  bottom: 30,
                  right: 5,
                }}
              />
            </Text>
          </TouchableOpacity>
       
    
       
      </View>
  )
}

export default SmallCardRender

const styles = StyleSheet.create({
   
    cardContainer: {
      backgroundColor: '#fff',
      borderRadius: 20,
      width: 173,
      marginVertical: 10,
      marginHorizontal: 5,
    },
    cardTitle: {
      marginTop: 30,
      fontSize: 16,
      fontWeight: 'bold',
      paddingHorizontal: 20,
    },
    cardDescription: {
      paddingVertical: 10,
      fontSize: 14,
      paddingHorizontal: 20,
    },
    cardImageContainer: {
      paddingTop: 40,
    },
    cardImage: {
      width: 100,
      height: 100,
    },
  });
  