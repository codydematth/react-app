import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { WelcomePage } from './pages/interstate/WelcomePage';
import Home from './pages/register/Home';
import PersonalReg from './pages/register/personal/PersonalReg';
import EcommerceReg from './pages/register/ecommerce/EcommerceReg';
import Verification from './pages/register/Verification';
import ExpiredVerification from './pages/register/ExpiredVerification';
import Successful from './pages/register/Successful';
import SignIn from './pages/register/SignIn';
import Register from './pages/register/Register';
import Interstate from './pages/interstate/Interstate';
import Card from './pages/interstate/Card';
import SameState from './pages/samestate/SameState';
import WaybillDetails from './pages/interstate/WaybillDetails';
import Pricing from './pages/interstate/Pricing';
import PaymentPreload from './pages/interstate/PaymentPreload';
import ConfirmPayment from './pages/interstate/ConfirmPayment';

// import  Icon  from 'react-native-vector-icons/dist/FontAwesome';
export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const Stack = createNativeStackNavigator();

  if (!isLoadingComplete) {
    return null;
  } else {
     
    return (
      <SafeAreaProvider>
        <WelcomePage/>
        <StatusBar />
      </SafeAreaProvider>
    );
      
  }
}
