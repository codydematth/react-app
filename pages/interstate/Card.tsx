import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton } from 'react-native-paper';

interface ICard {
  cardTitle?: string;
  cardDescription?: string;
  cardRadioBtn?: boolean;
  bgColor?: string;
  opacity?: number;
}
const Card: React.FC<ICard> = ({
  cardTitle,
  cardDescription,
  cardRadioBtn,
  bgColor,
  opacity,
}) => {
  const [checked, setChecked] = React.useState('express');
  return (
    <View style={styles.container}>
      <View
        style={[
          { backgroundColor: bgColor, opacity: opacity },
          styles.selectContainer,
        ]}>
        <Text
          style={{
            marginLeft: 15,
            fontSize: 18,
            fontWeight: '600',
            fontStyle: 'normal',
          }}>
          {cardTitle}
        </Text>
        <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '100',
              fontStyle: 'normal',
              lineHeight: 20,
              marginLeft: 15,
              marginRight: 80,
            }}>
            {cardDescription}
          </Text>
          {cardRadioBtn == true ? (
            <View style={{ bottom: 15, right: 10 }}>
              <RadioButton
                value='express'
                status={checked === 'express' ? 'unchecked' : 'checked'}
                onPress={() => setChecked('')}
              />
            </View>
          ) : (
            ''
          )}
        </View>
      </View>
    </View>
  );
};

export default Card;

Card.defaultProps = {
  cardRadioBtn: false,
  cardTitle: 'This Title',
  cardDescription: 'This Description',
  bgColor: '#fff',
  opacity: 1,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E5E5E5',
    color: '#484848',
    fontFamily: 'Poppins',
    paddingTop: 10,
    marginHorizontal: 20,
  },
  selectContainer: {
    borderRadius: 25,
    paddingVertical: 20,
  },
});
