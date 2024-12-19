import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';
import {Colors} from '../../utils/Colors';

const LoginScreen = ({navigation}: any) => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        Welcome back,
      </Text>
      <Text style={{color: Colors.grey, marginBottom: 20}}>
        Glad to meet you again! Please login to use the app.
      </Text>

      <InputField
        placeholder="Email"
        iconName="email"
        keyboardType="email-address"
      />
      <InputField
        placeholder="Password"
        iconName="lock"
        secureTextEntry={passwordVisible}
        isPasswordField
        toggleVisibility={() => setPasswordVisible(!passwordVisible)}
      />

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text
          style={{color: Colors.blumine, textAlign: 'right', marginBottom: 20}}>
          Forgot password?
        </Text>
      </TouchableOpacity>

      <Button title="Sign In" onPress={() => {}} />
      <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
        <Text style={{textAlign: 'center', marginTop: 20}}>
          Don't have an account?{' '}
          <Text style={{color: Colors.blumine}}>Join Now</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;
