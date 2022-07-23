import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SmallCard } from './SmallCard';
import { WelcomePageCard } from './WelcomePageCard';

interface IWelcomePage {
  welcomeUser?: string;
  totalBalance?: string;
}
export const WelcomePage: React.FC<IWelcomePage> = ({
  welcomeUser,
  totalBalance,
}) => {
  const { width, height } = Dimensions.get('window');
  return (
    <View style={styles.welcome}>
      <Text style={styles.welcomeUserText}> Hello, {welcomeUser}.</Text>
      {/* Total Balance */}
      <View style={styles.balanceContainer}>
      <ImageBackground
          source={require('../../assets/images/Track/Masks.png')}
          style={{ left: 1.5, right: 1, marginBottom: 20, borderRadius: 20}}>
        <Text style={styles.totalBalanceText}>Total Balance</Text>
        <View style={styles.totalContainer}>
          <Text style={styles.totalBalance}> ₦{totalBalance}</Text>
          <TouchableOpacity style={styles.balanceBtn}>
            <Text style={styles.balanceBtnText}>
              {' '}
              Top up{' '}
              <Text
                style={{ fontWeight: 'bold', fontSize: 18, paddingLeft: 2 }}>
                &#62;&#62;
              </Text>{' '}
            </Text>
          </TouchableOpacity>
        </View>
        </ImageBackground>
      </View>
      {/* TRACK YOUR BILL  */}
      <View style={styles.TrackContainer}>
        <Text
          style={{
            fontSize: 20,
            textAlign: 'center',
            paddingTop: 20,
            fontWeight: 'bold',
          }}>
          Track your Waybill
        </Text>
        
          <View style={styles.trackInputContainer}>
            <Ionicons
              name='search'
              size={20}
              style={{
                marginVertical: 'auto',
                marginLeft: 9,
                color: '#606060',
              }}
            />
            <TextInput placeholder='Waybill Number' style={styles.input} />
            <TouchableOpacity style={styles.wallbillBtn}>
              <Text style={{ color: '#fff', paddingHorizontal: 15 }}>
                {' '}
                Track
              </Text>
            </TouchableOpacity>
          </View>
      </View>

      {/* SEND A PACKAGE */}
      <View style={{ paddingTop: 30, paddingLeft: 10, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          Send a package
        </Text>
      </View>

      {/* CARD 1 and 2 */}
      <View
        style={{ flexDirection: 'row', flex: 'wrap', marginHorizontal: 15 }}>
        <WelcomePageCard />
      </View>

      {/* CARD 3 and 4 */}
      <View
        style={{ flexDirection: 'row', flex: 'wrap', marginHorizontal: 15 }}>
        <TouchableOpacity style={styles.cardContainer}>
          <Text style={styles.cardTitle}>Charter</Text>
          <View
            style={{
              borderBottomColor: '#46BA7F',
              borderBottomWidth: 3,
              width: 20,
              marginHorizontal: 20,
            }}></View>
          <Text style={styles.cardDescription}>Request a Vehichle</Text>
          <View style={styles.cardImageContainer}>
            <ImageBackground
              source={require('../../assets/images/road/Road1.png')}
              style={{ top: 20, right: 1, }}>
              <Image
                source={require('../../assets/images/card/lorry.png')}
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
                bottom: 30,
                right: 5,
              }}
            />
          </Text>
        </TouchableOpacity>

        {/* CARD 4 */}
        <View style={[{ opacity: 0.5 }, styles.cardContainer]}>
          <Text style={styles.cardTitle}>International</Text>
          <View
            style={{
              borderBottomColor: '#46BA7F',
              borderBottomWidth: 3,
              width: 20,
              marginHorizontal: 20,
            }}></View>
          <Text style={styles.cardDescription}>
            Send packages to others countries
          </Text>
          <View style={styles.cardImageContainer}>
            <Image
              source={require('../../assets/images/card/plane.png')}
              style={styles.cardImage}
              resizeMode='cover'
            />

            <Image
              source={require('../../assets/images/card/comingSoon.png')}
              style={{
                width: 60,
                height: 30,
                position: 'absolute',
                top: 100,
                left: 80,
                borderRadius: 50,
              }}
            />
          </View>
        </View>
      </View>
      <View style={{ paddingTop: 30, paddingLeft: 10, marginHorizontal: 20 }}>
        <Text style={{ fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>
          Other Actions
        </Text>
      </View>

      {/* SMALL CARDS */}
      <View style={{ marginLeft: 15 }}>
        <SmallCard />
      </View>
    </View>
  );
};

WelcomePage.defaultProps = {
  welcomeUser: 'John',
  totalBalance: '50,000',
};

const styles = StyleSheet.create({
  welcome: {
    backgroundColor: '#E5E5E5',
    height: 100,
    flex: 1,
  },
  welcomeUserText: {
    textAlign: 'center',
    paddingVertical: 16,
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceContainer: {
    backgroundColor: '#fff',
    borderRadius: 20,
    marginHorizontal: 15,
    height: 90,
    borderWidth: 2,
    borderColor: '#fff',
    shadowColor: '#456CD017',
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  totalBalanceText: {
    fontSize: 16,
    marginTop: 16,
    marginHorizontal: 16,
  },
  totalContainer: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  totalBalance: {
    fontSize: 24,
    marginVertical: 6,
    fontWeight: 'bold',
  },
  balanceBtn: {
    justifyContent: 'center',
  },
  balanceBtnText: {
    backgroundColor: '#46BA7F',
    color: '#fff',
    borderRadius: 20,
    padding: 10,
    fontSize: 14,
  },
  TrackContainer: {
    backgroundColor: '#fff',
    marginHorizontal: 15,
    marginTop: 40,
    height: 130,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 20,
    shadowColor: '#456CD017',
    shadowOpacity: 1,
    shadowOffset: {
      width: 2,
      height: 4,
    },
  },
  trackInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#46BA7F',
    borderRadius: 15,
    marginTop: 20,
    marginHorizontal: 15,
    padding: 2,
  },
  input: {
    height: 'relative',
    width: 300,
    fontSize: 13,
    paddingLeft: 10,
  },
  wallbillBtn: {
    backgroundColor: '#46BA7F',
    borderRadius: 15,
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
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
