import { StyleSheet } from 'react-native';
import { Colors } from '../../utils/Colors';
import {appWidth } from '../../utils/Constants';

export const SplashScreenStyles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.blumine,
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
    },
    appCont:{
        position:'absolute',
        display:'flex',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center',
        left:appWidth * (30 / 100),
    },
    appTitle:{
        fontSize:24,
        fontWeight:'700',
        color:Colors.white,
        textAlign:'center',
        fontFamily:'Manrope-Regular',
        position:'relative',
        left:55,
        top:-30,
    },
});
