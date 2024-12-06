import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity,StatusBar} from 'react-native';
import InputField from '../components/common/InputField';
import Button from '../components/common/Button';
import SignInWithGoogleButton from '../components/common/SignInWithGoogleButton';

const LoginScreen: React.FC = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword');
  };

  const handleSignInWithGoogle = () => {
    console.log('Google Sign-In Pressed');
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" translucent={true} backgroundColor="transparent" />
      <Text style={styles.title}>Welcome back,</Text>
      <Text style={styles.subtitle}>
        Glad to meet you again!, please login to use the app.
      </Text>
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
        <Text style={styles.link}>Forgot password?</Text>
      </TouchableOpacity>
      <Button title="Sign In" onPress={() => {}} />
      <SignInWithGoogleButton onPress={handleSignInWithGoogle} />
      <Text style={styles.footer}>
        Don’t have an account?{' '}
        <Text style={styles.link} onPress={() => navigation.navigate('SignUp')}>
          Join Now
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111111',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#50555C',
  },
  link: {
    color: '#006666',
    textAlign: 'right',
    marginBottom: 15,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
});

export default LoginScreen;
