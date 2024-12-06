import { StyleSheet ,Dimensions} from 'react-native';
import { Colors } from '../../utils/Colors';
const {width, height} = Dimensions.get('window');

export const CustomOnboardingStyles = StyleSheet.create({
    backgroundImage: {
        width: width,
        height: height,
        display:'flex',
        flexDirection:'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingBottom:height * (10 / 100),
      },
      overlay:{
        ...StyleSheet.absoluteFillObject,
        backgroundColor:'rgba(0,0,0,0.2)',
      },
      container: {
        flex: 1,
        backgroundColor: Colors.black,
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      textBoxContainer:{
        width:width * (66 / 100),
        marginInline:'auto',
      },
      title: {
        fontSize: 24,
        fontFamily: 'Manrope-Regular',
        fontWeight: '700',
        color: Colors.white,
        textAlign: 'center',
      },
      subtitle: {
        fontSize: 16,
        fontFamily: 'NunitoSans_7pt-Regular',
        fontWeight: '400',
        color: Colors.white,
        textAlign: 'center',
      },
      dot: {
        backgroundColor: Colors.blackHaze,
        width: 8,
        height: 8,
        borderRadius: 4,
        marginHorizontal: 4,
      },
      paginationCont:{
        position:'absolute',
        bottom:height * (27 / 100),
      },
      activeDot: {
        backgroundColor: Colors.tangerine,
        width: 30,
        height: 8,
        borderRadius: 8,
        marginHorizontal: 4,
      },
      button: {
        backgroundColor: Colors.blumine,
        width:width - 40,
        height: 54,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        marginTop:80,
        marginBottom:30,
      },
      buttonText: {
        color: Colors.white,
        fontSize: 21,
        fontWeight: '600',
        fontFamily: 'Manrope-Regular',
        textAlign: 'center',
        lineHeight: 54,
      },
      footerContainer:{
        display:'flex',
        flexDirection:'row',
        alignItems:'center',
        gap:4,
      },
      footerText:{
        fontFamily:'NunitoSans_7pt-Regular',
        fontWeight:'400',
        fontSize:15,
        color:Colors.white,
      },
      footerLink:{
        fontWeight:'900',
        color:Colors.tangerine,
        fontFamily:'Manrope-Regular',
        fontSize:15,
      },
});
