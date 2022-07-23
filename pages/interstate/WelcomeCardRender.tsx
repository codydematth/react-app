import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ImageBackground
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';

  interface ICard {
    heading? : string
    description? : string
    image? : string
    backgroungImage? : string
  }
const WelcomeCardRender: React.FC <ICard> = ({heading, description, image, backgroungImage}) => {
  return (
    <View>
       <TouchableOpacity style={styles.cardContainer}>
            <Text style={styles.cardTitle}>{heading}</Text>
            <View
              style={{
                borderBottomColor: '#46BA7F',
                borderBottomWidth: 3,
                width: 20,
                marginHorizontal: 20,
              }}></View>
            <Text style={styles.cardDescription}>
              {description}
            </Text>
            <View style={styles.cardImageContainer}>
            <ImageBackground source={backgroungImage} style={{ top: 10, right: 1, marginBottom: 0} }>
              <Image
                source={image}
                style={styles.cardImage}
                resizeMode='cover'
              />
              </ImageBackground>
            </View>
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
                color='#fff'
                style={{
                  marginLeft: 60,
                  position: 'absolute',
                  bottom: 15,
                  right: 5,
                }}
              />
            </Text>
          </TouchableOpacity>
       
    
       
      </View>
  )
}

export default WelcomeCardRender

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
  