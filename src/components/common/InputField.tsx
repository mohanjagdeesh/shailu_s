import React, {useState} from 'react';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {InputFieldProps} from '../../interfaces/IInput';
import {Colors} from '../../utils/Colors';

const InputField: React.FC<InputFieldProps> = ({
  iconName,
  placeholder,
  secureTextEntry = false,
  toggleVisibility,
  isPasswordField = false,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const isActive = isFocused || inputValue;

  return (
    <View style={[styles.container, isFocused && styles.focusedContainer]}>
      {iconName && (
        <Icon
          name={iconName}
          size={20}
          style={[
            styles.icon,
            {color: isActive ? Colors.blumine : Colors.grey},
          ]}
        />
      )}
      <TextInput
        style={[styles.input, {color: isActive ? Colors.blumine : Colors.grey}]}
        placeholder={placeholder}
        placeholderTextColor="Colors.grey"
        secureTextEntry={secureTextEntry}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        onChangeText={setInputValue}
        value={inputValue}
        {...rest}
      />
      {isPasswordField && (
        <TouchableOpacity onPress={toggleVisibility}>
          <Icon
            name={secureTextEntry ? 'visibility-off' : 'visibility'}
            size={20}
            style={[
              styles.icon,
              {color: isFocused || inputValue ? Colors.blumine : Colors.grey},
            ]}
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
    borderColor: Colors.grey,
    borderRadius: 50,
    padding: 10,
    marginBottom: 15,
  },
  focusedContainer: {
    borderColor: Colors.blumine,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
  },
});

export default InputField;
