import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  TextInputAndroidProps,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface InputFieldProps extends TextInputAndroidProps {
  iconName?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  toggleVisibility?: () => void;
  isPasswordField?: boolean;
  [key: string]: any;
}

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry = false,
  toggleVisibility,
  isPasswordField = false,
  ...rest
}) => {
  return (
    <View style={styles.container}>
      {iconName && <Icon name={iconName} size={20} style={styles.icon} />}
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        {...rest}
      />
      {isPasswordField && (
        <TouchableOpacity onPress={toggleVisibility}>
          <Icon
            name={secureTextEntry ? 'visibility-off' : 'visibility'}
            size={20}
            style={styles.icon}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});

export default InputField;
