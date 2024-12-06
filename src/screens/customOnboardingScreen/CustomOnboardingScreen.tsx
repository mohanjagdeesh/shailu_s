import {
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {onboardingPages as pages} from '../../components/onboarding/Onboarding';
import Swiper from 'react-native-swiper';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import { CustomOnboardingStyles } from './CustomOnboardingStyles';

// Type for navigation
type OnboardingStackParamList = {
  Login: undefined; // Define screen parameters if needed
};

const CustomOnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Track current slide index
  const navigation = useNavigation<NavigationProp<OnboardingStackParamList>>(); // For navigation to Login

  const handleNext = () => {
    console.log('Next button clicked! Current Index:', currentIndex); // Log current index
    if (currentIndex < pages.length - 1) {
      setCurrentIndex(currentIndex + 1);
      console.log('Updated Index:', currentIndex + 1); // Log updated index
    } else {
      console.log('No more slides!');
    }
  };

  const handleGetStarted = () => {
    navigation.navigate('Login'); // Assuming "Login" is the name of your login screen
  };

  return (
    <View style={CustomOnboardingStyles.container}>
      <Swiper
        loop={false} // Prevent infinite looping
        showsPagination={true} // Display dots
        dotStyle={CustomOnboardingStyles.dot}
        activeDotStyle={CustomOnboardingStyles.activeDot}
        paginationStyle={CustomOnboardingStyles.paginationCont}
        index={currentIndex} // Set current index
        onIndexChanged={(index: number) => {
          console.log('Slide changed to:', index);
          setCurrentIndex(index);
        }}>
        {pages.map((page, index) => (
          <ImageBackground
            key={index}
            source={page.image}
            style={CustomOnboardingStyles.backgroundImage}
            resizeMode="cover">
            <View style={CustomOnboardingStyles.overlay}/>
            <View style={CustomOnboardingStyles.textBoxContainer}>
              <Text style={CustomOnboardingStyles.title}>{page.title}</Text>
              <Text style={CustomOnboardingStyles.subtitle}>{page.subtitle}</Text>
            </View>
            <View>
              {index < pages.length - 1 ? (
                <TouchableOpacity activeOpacity={0.95} style={CustomOnboardingStyles.button} onPress={handleNext}>
                  <Text style={CustomOnboardingStyles.buttonText}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.95}
                  style={CustomOnboardingStyles.button}
                  onPress={handleGetStarted}>
                  <Text style={CustomOnboardingStyles.buttonText}>Get Started</Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={CustomOnboardingStyles.footerContainer}>
              <Text style={CustomOnboardingStyles.footerText}>Already have an account?</Text>
              <TouchableOpacity activeOpacity={0.95}><Text style={CustomOnboardingStyles.footerLink}>Sign in</Text></TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </Swiper>
    </View>
  );
};

export default CustomOnboardingScreen;
