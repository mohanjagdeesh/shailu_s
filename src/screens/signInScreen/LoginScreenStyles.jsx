import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/Colors';
const {width, height} = Dimensions.get('window');

export const CustomSignInStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#111111',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
    color: '#50555C',
  },
  link: {
    color: '#006666',
    textAlign: 'right',
    marginBottom: 15,
  },
  footer: {
    textAlign: 'center',
    marginTop: 20,
  },
});
