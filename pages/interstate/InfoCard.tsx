import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

interface CardInfo {
  name?: string;
  number?: string;
  address?: string;
  bgColor?: string;
  editIcon?: boolean;
}
const InfoCard: React.FC<CardInfo> = ({
  name,
  number,
  address,
  bgColor,
  editIcon,
}) => {
  return (
    <View>
      <View style={[{ backgroundColor: bgColor }, styles.infoContainer]}>
        <Text style={styles.infotext}>{name}</Text>
        <Text style={styles.infotext}>{number}</Text>
        <Text style={styles.infotext}>{address}</Text>
        {editIcon == false ? (
          ''
        ) : (
          <View style={{ bottom: 10 }}>
            <Image
              source={require('../../assets/images/sameStateIcon/edit.png')}
              style={{
                width: 25,
                height: 25,
                tintColor: '#000',
                position: 'absolute',
                bottom: 45,
                right: 20,
              }}
              resizeMode='cover'
            />
          </View>
        )}
      </View>
    </View>
  );
};

export default InfoCard;

InfoCard.defaultProps = {
  bgColor: 'white',
  editIcon: false,
};

const styles = StyleSheet.create({
  infoContainer: {
    borderRadius: 20,
    marginHorizontal: 15,
    paddingVertical: 30,
    marginTop: 10,
  },
  infotext: {
    color: '#1F1F1F',
    fontSize: 16,
    paddingTop: 10,
    paddingHorizontal: 20,
  },
});
