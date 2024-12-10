import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomOnboardingScreen from './src/screens/customOnboardingScreen/CustomOnboardingScreen';
import LoginScreen from './src/screens/signInScreen/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import {Colors} from './src/utils/Colors';
import SplashScreen from './src/screens/splashScreen/SplashScreen';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined; // Add SignUp here
  Onboarding: undefined;
  ForgotPassword: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [isFirstLaunch, setIsFirstLaunch] = useState<boolean | null>(null);
  const [splashScreen, setSplashScreen] = useState<boolean>(true);

  useEffect(() => {
    const checkFirstLaunch = async () => {
      try {
        const value = await AsyncStorage.getItem('alreadyLaunched');
        console.log('alreadyLaunched value from AsyncStorage:', value);
        if (value === null) {
          setIsFirstLaunch(true);
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error accessing AsyncStorage: ', error);
      }
    };
    checkFirstLaunch();
  }, []);

  if (splashScreen) {
    setTimeout(() => {
      setSplashScreen(false);
    }, 5000);
    return (
      // eslint-disable-next-line react/react-in-jsx-scope
      <SplashScreen />
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={isFirstLaunch ? 'Onboarding' : 'Login'}
        screenOptions={{statusBarBackgroundColor: Colors.blumine}}>
        <Stack.Screen
          name="Onboarding"
          component={CustomOnboardingScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: true, title: 'Forgot Password'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
