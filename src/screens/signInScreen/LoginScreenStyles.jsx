import {StyleSheet, Dimensions} from 'react-native';
import {Colors} from '../../utils/Colors';
const {width, height} = Dimensions.get('window');

export const CustomSignInStyles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontFamily: 'Manrope-Regular',
    fontWeight: '700',
    color: '#111111',
  },
  subtitle: {
    fontSize: 14,
    fontFamily: 'NunitoSans_7pt-Regular',
    fontWeight: '400',
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
