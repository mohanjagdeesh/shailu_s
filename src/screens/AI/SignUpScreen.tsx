import React, {useState} from 'react';
import {View, Text} from 'react-native';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const SignUpScreen = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        Create an account,
      </Text>
      <Text style={{color: '#666', marginBottom: 20}}>
        Please type full information below and we can create your account
      </Text>

      <InputField placeholder="Name" iconName="person" />
      <InputField
        placeholder="Email address"
        iconName="email"
        keyboardType="email-address"
      />
      <InputField
        placeholder="Mobile number"
        iconName="phone"
        keyboardType="phone-pad"
      />
      <InputField
        placeholder="Password"
        iconName="lock"
        secureTextEntry={passwordVisible}
        isPasswordField
        toggleVisibility={() => setPasswordVisible(!passwordVisible)}
      />

      <Button title="Join Now" onPress={() => {}} />
      <Text style={{textAlign: 'center', marginTop: 20}}>
        Already have an account?{' '}
        <Text
          style={{color: '#006666'}}
          onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
};

export default SignUpScreen;
