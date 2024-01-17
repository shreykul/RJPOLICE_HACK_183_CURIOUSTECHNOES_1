
import React, { useState } from 'react';
import { StyleSheet, Text, Image, FlatList, View,TouchableOpacity } from 'react-native';
import FontsSize from '../common/FontsSize';
import ImageSize from '../common/ImageSize';
import MarginHW from '../common/MarginHW';
import fonts from '../common/fonts';
import HWSize from '../common/HWSize';
import { Dropdown } from 'react-native-element-dropdown';
import { Colors } from './color';


const Custom_Drop_Down=(props)=> {
  const [isFocus, setIsFocus] = useState(false);

  
  const  handleItem=(item)=>{
    setIsFocus(false);
    props.SelectValue(item)
  }
     return (
        <View>
            <Dropdown
          style={[Styles.dropdown,  {backgroundColor:props.isBgColorWhite?'#fff' :props.isBgColor? Colors.DropColor:Colors.InputColor, borderColor:props.isboder?'grey' :Colors.InputColor }]}
          placeholderStyle={Styles.placeholderStyle}
          selectedTextStyle={Styles.selectedTextStyle}
          inputSearchStyle={[Styles.inputSearchStyle,{backgroundColor:props.isBgColor? Colors.DropColor:Colors.InputColor,}]}
          itemTextStyle={{color:Colors.black,fontSize:FontsSize.size16, fontFamily:fonts.PoppinsMedium,}}
          iconStyle={[Styles.iconStyle,{transform: [{ rotate: isFocus ? "180deg" : "0deg" }]}]}
          data={props.list_item}
          search
          disable={props.Isdisable}
          activeColor="#fff"
          maxHeight={props.isheight?HWSize.H_Height220:HWSize.H_Height250}
          labelField="label"
          valueField="value"
          placeholder={props.isStation? props.value :!isFocus ? props.isBgColor?props.placeholderName:props.placeholderName : props.value}
          searchPlaceholder="Search..."
          value={props.value}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onChange={(item) => {handleItem(item) }}
         
        />
        <View style={Styles.TextPostion}>
           <Text style={Styles.error}>{props.is_error}</Text>
           </View>
            </View>
        );
    }

export default Custom_Drop_Down

const Styles = StyleSheet.create({
    viewOfDropdown: { flexDirection: 'row', borderColor: '#000', padding:  MarginHW.MarginW5, marginHorizontal:  MarginHW.MarginW5, },
    dropdown: {
        height: MarginHW.MarginH55, 
        borderWidth: 0.5, borderRadius:MarginHW.MarginH8, paddingHorizontal:MarginHW.MarginW10,
    },
    label: { position: 'absolute', backgroundColor:Colors.InputColor, left:MarginHW.MarginW22, top:MarginHW.MarginH8, zIndex: 999,
    paddingHorizontal:MarginHW.MarginW8,fontSize:FontsSize.size14, fontFamily:fonts.PoppinsMedium},
    placeholderStyle: {fontSize:FontsSize.size12,color:Colors.black, fontFamily:fonts.PoppinsMedium },
    selectedTextStyle: {fontSize:FontsSize.size14,color:Colors.black, fontFamily:fonts.PoppinsLight,marginBottom:MarginHW.MarginH10,marginTop:MarginHW.MarginH10},
    iconStyle: {width:ImageSize.ImageW20, height:ImageSize.ImageH20, },
    inputSearchStyle: { height: ImageSize.ImageH40,fontSize:FontsSize.size16,  },
    TextPostion:{height:MarginHW.MarginH20, position:'absolute',marginLeft:MarginHW.MarginH1, bottom:-MarginHW.MarginH18,},
    error:{ color:'red',fontSize:FontsSize.size12,fontFamily:fonts.PoppinsRegular,},

})
