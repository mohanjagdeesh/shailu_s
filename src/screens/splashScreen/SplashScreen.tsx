import React from 'react';
import { StatusBar, Image, Text, View } from 'react-native';
import { SplashScreenStyles } from './SplashScreenStyles';
import { appName } from '../../utils/Constants';

const SplashScreen = () => {
  return (
    <View style={SplashScreenStyles.container}>
      <StatusBar
        backgroundColor={SplashScreenStyles.container.backgroundColor}
        barStyle="light-content"
      />
      <View style={SplashScreenStyles.appCont}>
        <Image source={require('../../assests/logo.png')} alt="Logo" />
        <Text style={SplashScreenStyles.appTitle}>{appName}</Text>
      </View>
    </View>
  );
};

export default SplashScreen;
