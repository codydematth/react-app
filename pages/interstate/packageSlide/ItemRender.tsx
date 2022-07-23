import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface IPackage {
  id?: number;
  name?: string;
  image?: string;
}
const ItemRender: React.FC<IPackage> = ({ name, image }) => {
  return (
    <View style={styles.itemContainer}>
      <Image source={image} style={styles.itemImage} />
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
};

export default ItemRender;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    width: 150,
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginRight: 8,
  },
  itemText: {
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  itemImage: {
    width: 30,
    height: 30,
  },
});
