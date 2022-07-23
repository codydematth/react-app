import React from 'react';
import { FlatList, Image, View } from 'react-native';
import ItemRender from './ItemRender';

const Slides = () => {
  const Package = [
    {
      id: 1,
      name: 'Electronic',
      image: require('../../../assets/images/packages/electronicPackage.png'),
    },
    {
      id: 2,
      name: 'Document',
      image: require('../../../assets/images/packages/documentPackage.png'),
    },
    {
      id: 3,
      name: 'Jewelry',
      image: require('../../../assets/images/packages/jewelryPackage.png'),
    },
  ];
  return (
    <FlatList
      data={Package}
      renderItem={({ item }) => (
        <ItemRender name={item.name} image={item.image} />
      )}
      keyExtractor={(item) => item.id}
      showsHorizontalScrollIndicator={false}
      // ItemSeparatorComponent={Separator}
      horizontal={true}
    />
  );
};

export default Slides;
