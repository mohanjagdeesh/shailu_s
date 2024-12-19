import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StatusBar} from 'react-native';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import SignInWithGoogleButton from '../../components/common/SignInWithGoogleButton';
import {CustomSignInStyles} from './LoginScreenStyles';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignInWithGoogle = () => {
    console.log('Google Sign-In Pressed');
  };

  return (
    <View style={CustomSignInStyles.container}>
      <View>
        <Text style={CustomSignInStyles.title}>Welcome back,</Text>
        <Text style={CustomSignInStyles.subtitle}>
          Glad to meet you again!, please login to use the app.
        </Text>
      </View>
      <View>
        <InputField
          placeholder="Email"
          iconName="email"
          keyboardType="email-address" // For email
          autoCapitalize="none" // Prevent auto-capitalization
          textContentType="emailAddress" // Helps autofill on iOS
        />
        <InputField
          placeholder="Password"
          iconName="lock"
          secureTextEntry={passwordVisible}
          isPasswordField
          toggleVisibility={() => setPasswordVisible(!passwordVisible)}
        />
        <TouchableOpacity onPress={handleForgotPassword}>
          <Text style={CustomSignInStyles.link}>Forgot password?</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Button title="Sign In" onPress={() => {}} />
        <SignInWithGoogleButton onPress={handleSignInWithGoogle} />
        <Text style={CustomSignInStyles.footer}>
          Don’t have an account?{' '}
          <Text
            style={CustomSignInStyles.link}
            onPress={() => navigation.navigate('SignUp')}>
            Join Now
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default LoginScreen;
