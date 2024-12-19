import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CustomOnboardingScreen from './src/screens/customOnboardingScreen/CustomOnboardingScreen';
import LoginScreen from './src/screens/AI/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import ForgotPasswordScreen from './src/screens/AI/ForgotPasswordScreen';
import {Colors} from './src/utils/Colors';
import SplashScreen from './src/screens/splashScreen/SplashScreen';
import SignUpScreen from './src/screens/AI/SignUpScreen';
import EmailVerificationScreen from './src/screens/AI/EmailVerificationScreen';
import ResetPasswordScreen from './src/screens/AI/ResetPasswordScreen';

export type RootStackParamList = {
  Login: undefined;
  SignUp: undefined; // Add SignUp here
  Onboarding: undefined;
  ForgotPassword: undefined;
  EmailVerification: undefined;
  ResetPassword: undefined;
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
      {/* <Stack.Navigator
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
      </Stack.Navigator> */}
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="EmailVerification"
          component={EmailVerificationScreen}
        />
        <Stack.Screen name="ResetPassword" component={ResetPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
