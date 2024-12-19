import React, {useState} from 'react';
import {View, Text} from 'react-native';
import InputField from '../../components/common/InputField';
import Button from '../../components/common/Button';

const ResetPasswordScreen = () => {
  const [passwordVisible, setPasswordVisible] = useState(true);

  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        New password,
      </Text>
      <Text style={{color: '#666', marginBottom: 20}}>
        Now, you can create new password and confirm it below
      </Text>

      <InputField
        placeholder="New password"
        iconName="lock"
        secureTextEntry={passwordVisible}
        isPasswordField
        toggleVisibility={() => setPasswordVisible(!passwordVisible)}
      />
      <InputField
        placeholder="Confirm new password"
        iconName="lock"
        secureTextEntry={passwordVisible}
        isPasswordField
        toggleVisibility={() => setPasswordVisible(!passwordVisible)}
      />
      <Button title="Confirm New Password" onPress={() => {}} />
    </View>
  );
};

export default ResetPasswordScreen;
