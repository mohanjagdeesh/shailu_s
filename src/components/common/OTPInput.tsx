import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';

interface OTPInputProps {
  length: number;
  onChange: (text: string, index: number) => void;
}

const OTPInput: React.FC<OTPInputProps> = ({length, onChange}) => {
  return (
    <View style={styles.container}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <TextInput
            key={index}
            style={styles.input}
            keyboardType="numeric"
            maxLength={1}
            onChangeText={text => onChange(text, index)}
          />
        ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    width: 40,
    height: 40,
    textAlign: 'center',
  },
});

export default OTPInput;
