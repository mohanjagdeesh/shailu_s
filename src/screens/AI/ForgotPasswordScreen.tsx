import React from 'react';
import {View, Text} from 'react-native';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const ForgotPasswordScreen = ({navigation}: any) => {
  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        Forgot password,
      </Text>
      <Text style={{color: '#666', marginBottom: 20}}>
        Please type your email below and we will give you a OTP code
      </Text>

      <InputField
        placeholder="Email address"
        iconName="email"
        keyboardType="email-address"
      />
      <Button
        title="Send Code"
        onPress={() => navigation.navigate('EmailVerification')}
      />
    </View>
  );
};

export default ForgotPasswordScreen;
