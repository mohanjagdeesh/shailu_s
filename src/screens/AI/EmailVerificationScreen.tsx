import React from 'react';
import {View, Text, TextInput} from 'react-native';
import Button from '../../components/common/Button';

const EmailVerificationScreen = ({navigation}: any) => {
  return (
    <View style={{padding: 20, flex: 1, justifyContent: 'center'}}>
      <Text style={{fontSize: 24, fontWeight: 'bold', marginBottom: 10}}>
        Email verification,
      </Text>
      <Text style={{color: '#666', marginBottom: 20}}>
        Please type OTP code that we gave you
      </Text>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 20,
        }}>
        {[1, 2, 3, 4].map((_, index) => (
          <TextInput
            key={index}
            style={{
              borderWidth: 1,
              borderColor: '#ccc',
              width: 50,
              height: 50,
              textAlign: 'center',
              borderRadius: 10,
            }}
            keyboardType="number-pad"
          />
        ))}
      </View>

      <Button
        title="Verify Email"
        onPress={() => navigation.navigate('ResetPassword')}
      />
    </View>
  );
};

export default EmailVerificationScreen;
