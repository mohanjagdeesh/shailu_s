import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Image, View} from 'react-native';

const SignInWithGoogleButton: React.FC<{onPress: () => void}> = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <View style={styles.content}>
        <Image
          source={require('../../assests/google.png')} // Replace with the path to your Google icon
          style={styles.icon}
        />
        <Text style={styles.text}>Sign in with Google</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  text: {
    fontSize: 16,
    color: '#000',
  },
});

export default SignInWithGoogleButton;
