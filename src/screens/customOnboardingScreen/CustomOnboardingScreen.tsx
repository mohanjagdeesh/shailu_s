import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React, {useRef, useState} from 'react';
import {onboardingPages as pages} from '../../components/onboarding/Onboarding';
import {SwiperFlatList} from 'react-native-swiper-flatlist';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {CustomOnboardingStyles} from './CustomOnboardingStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Type for navigation
type OnboardingStackParamList = {
  Login: undefined; // Define screen parameters if needed
};

const CustomOnboardingScreen: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0); // Track current slide index
  const navigation = useNavigation<NavigationProp<OnboardingStackParamList>>(); // For navigation to Login
  const swiperRef = useRef<SwiperFlatList>(null);

  const handleNext = () => {
    if (currentIndex < pages.length - 1) {
      swiperRef.current?.scrollToIndex({index: currentIndex + 1});
    }
  };

  const handleGetStarted = async () => {
    try {
      await AsyncStorage.setItem('alreadyLaunched', 'true');
      navigation.navigate('Login');
    } catch (error) {
      console.error('Error saving first launch status:', error);
    }
  };

  return (
    <View style={CustomOnboardingStyles.container}>
      <SwiperFlatList
        ref={swiperRef}
        index={currentIndex}
        onChangeIndex={({index}) => setCurrentIndex(index)}
        showPagination
        paginationStyle={CustomOnboardingStyles.paginationCont}
        paginationStyleItem={CustomOnboardingStyles.dot}
        paginationStyleItemActive={CustomOnboardingStyles.activeDot}>
        {pages.map((page, index) => (
          <ImageBackground
            key={index}
            source={page.image}
            style={CustomOnboardingStyles.backgroundImage}
            resizeMode="cover">
            <View style={CustomOnboardingStyles.overlay} />
            <View style={CustomOnboardingStyles.textBoxContainer}>
              <Text style={CustomOnboardingStyles.title}>{page.title}</Text>
              <Text style={CustomOnboardingStyles.subtitle}>
                {page.subtitle}
              </Text>
            </View>
            <View>
              {index < pages.length - 1 ? (
                <TouchableOpacity
                  activeOpacity={0.95}
                  style={CustomOnboardingStyles.button}
                  onPress={handleNext}>
                  <Text style={CustomOnboardingStyles.buttonText}>Next</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.95}
                  style={CustomOnboardingStyles.button}
                  onPress={handleGetStarted}>
                  <Text style={CustomOnboardingStyles.buttonText}>
                    Get Started
                  </Text>
                </TouchableOpacity>
              )}
            </View>
            <View style={CustomOnboardingStyles.footerContainer}>
              <Text style={CustomOnboardingStyles.footerText}>
                Already have an account?
              </Text>
              <TouchableOpacity activeOpacity={0.95}>
                <Text style={CustomOnboardingStyles.footerLink}>Sign in</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        ))}
      </SwiperFlatList>
    </View>
  );
};

export default CustomOnboardingScreen;
