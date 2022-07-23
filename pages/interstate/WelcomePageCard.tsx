import { StyleSheet, ScrollView, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import WelcomeCardRender from './WelcomeCardRender';

interface IWelcomePage {
  welcomeUser?: string;
  totalBalance?: string;
}
export const WelcomePageCard: React.FC<IWelcomePage> = ({
  welcomeUser,
  totalBalance,
}) => {
  const homeCard = [
    {
      id: 1,
      heading: 'Same State',
      description: 'Deliveries within the same state',
      image: require('../../assets/images/card/bike.png'),
      backgroungImage: require('../../assets/images/road/Road1.png'),
    },
    {
      id: 2,
      heading: 'Interstate',
      description: 'Deliveries outside your current state',
      image: require('../../assets/images/card/buss.png'),
      backgroungImage: require('../../assets/images/road/Road2.png'),
    },
  ];
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
        data={homeCard}
        renderItem={({ item }) => (
          <WelcomeCardRender
            heading={item.heading}
            image={item.image}
            description={item.description}
            backgroungImage={item.backgroungImage}
          />
        )}
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        numColumns={homeCard.length}
        // ItemSeparatorComponent={Separator
      />
    </ScrollView>
  );
};

WelcomePageCard.defaultProps = {
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
