import {
    StyleSheet,
    ScrollView,
    FlatList
  } from 'react-native';
  import Ionicons from 'react-native-vector-icons/Ionicons';
import SmallCardRender from './SmallCardRender';
  
  
  export const SmallCard = (
) => {
  
    const smallCard = [
        {   id: 1,
            heading: 'Waybill History',
            description: 'Records of all your waybills.'
        },
        {   id: 2,
            heading: 'Get Help',
            description: 'Get help & support from our team',
        }
    ]
    return (
      
      <ScrollView
      horizontal
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        flexDirection: 'row',
        flexWrap: 'wrap',
      }}>
       <FlatList
        data={smallCard}
        renderItem={({ item }) => <SmallCardRender heading={item.heading} description={item.description}/>}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={smallCard.length}
        // ItemSeparatorComponent={Separator
      />
      </ScrollView>

    );
  };
  
  SmallCard.defaultProps = {
    welcomeUser: 'John',
    totalBalance: '50,000',
  };
  
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
  