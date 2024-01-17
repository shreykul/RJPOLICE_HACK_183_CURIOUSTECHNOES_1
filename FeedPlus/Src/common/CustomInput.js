import React, { useState } from 'react';
import { StyleSheet,Text,TextInput, View,Image,TouchableOpacity } from 'react-native';
import fonts from './fonts';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import ImagePath from './ImagePath';
import HWSize from './HWSize';
import ImageSize from './ImageSize';
import MarginHW from './MarginHW';
import FontsSize from './FontsSize';
import { Colors } from './color';

export default function CustomInput(navigation) {
    const {autoCapitalize,blurOnSubmit, autoFocus,isAsterisk,ref,isstret,onSubmitEditing, onChangeText,editable,keyboardType,value,label,placeholder,placeholderTextColor,isEye,is_error,onclicEye,maxLength,secureTextEntry} = navigation
//   ('autoFocus',autoFocus)
    return (
        <View style={styles.viewStyles}>
           <View style={styles.AsteriskPostion}>
           <Text style={styles.LabelText}>{label}</Text>
           {isAsterisk&&
            <Image resizeMode='contain' style={[styles.Asterisk]} source={ImagePath.Asterisk_grey} />
           }
            </View>

           <TextInput
                ref={ref}
                style={styles.inputStyles}
                label={label}
                autoFocus={autoFocus}
                blurOnSubmit={blurOnSubmit}
                autoCapitalize={autoCapitalize}
                placeholder={placeholder}
                placeholderTextColor={placeholderTextColor}
                value={value}
                editable={editable}
                onChangeText={onChangeText}
                maxLength={maxLength}
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
                textColor={'#fff'}
                onSubmitEditing={onSubmitEditing}
            />
            {isEye&&
            <TouchableOpacity onPress={()=>{onclicEye()}} style={styles.EyePostion}>
            <Image resizeMode='contain' style={[styles.EyeIcon,{tintColor:secureTextEntry?color.appGrey:Colors.appGrey}]} source={secureTextEntry?ImagePath.eye:ImagePath.invisible} />
            </TouchableOpacity>
             }
          <View style={isstret?styles.TextPassword_Postion:styles.TextPostion}>
           <Text style={styles.error}>{is_error}</Text>
          </View>    
        </View>

    )
}
const styles = StyleSheet.create({
    viewStyles:{},
    inputStyles:{
    marginVertical:MarginHW.MarginH12,
    borderRadius:MarginHW.MarginH10, 
    paddingLeft:MarginHW.MarginH10,
    color:Colors.Dark_black, 
    fontFamily:fonts.PoppinsRegular, 
    fontSize:FontsSize.size16 , 
    height:HWSize.H_Height55,
    backgroundColor:Colors.white,
    marginHorizontal:MarginHW.MarginH20,
    bottom:MarginHW.MarginH5,
  },
    EyeIcon:{width:ImageSize.ImageW20,height:ImageSize.ImageH20},
    EyePostion:{position:'absolute',alignItems:'center',justifyContent:'center', bottom:0,top:MarginHW.MarginH20,right:MarginHW.MarginW30,},
    LabelText:{marginHorizontal:MarginHW.MarginH20, color:Colors.DarkTextColor,fontSize:FontsSize.size14,fontFamily:fonts.PoppinsMedium,},
    TextPostion:{ height:MarginHW.MarginH20, position:'absolute',marginLeft:MarginHW.MarginH20, bottom:-MarginHW.MarginH2,},
    error:{ color:Colors.Red_Dot,fontSize:FontsSize.size12,fontFamily:fonts.PoppinsRegular,},
    TextPassword_Postion:{  position:'absolute',marginLeft:MarginHW.MarginH20, bottom:-MarginHW.MarginH18,},
    Asterisk:{right:MarginHW.MarginW10, width:MarginHW.MarginW8,height:MarginHW.MarginH8},
    AsteriskPostion:{flexDirection:'row', alignItems:'center', }

})

