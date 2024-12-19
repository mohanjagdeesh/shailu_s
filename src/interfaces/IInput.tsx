import {TextInputAndroidProps} from 'react-native';

export interface InputFieldProps extends TextInputAndroidProps {
  iconName?: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  toggleVisibility?: () => void;
  isPasswordField?: boolean;
  [key: string]: any;
}
