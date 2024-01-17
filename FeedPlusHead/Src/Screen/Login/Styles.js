import { View, Text } from 'react-native'
import React from 'react'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import MarginHW from '../../common/MarginHW'
import ImageSize from '../../common/ImageSize'

const Styles = {
    maintext:{fontFamily:fonts.PoppinsMedium,color:'black',fontSize:FontsSize.size22,alignSelf:'center',marginVertical:MarginHW.MarginH20},
    subtext:{fontFamily:fonts.PoppinsLight,color:'grey',fontSize:FontsSize.size18,alignSelf:'flex-start',marginVertical:MarginHW.MarginH10,paddingLeft:MarginHW.MarginW22},
logoimage:{width:ImageSize.ImageW60,height:ImageSize.ImageH115,alignSelf:'center',marginTop:MarginHW.MarginH50}

}

export default Styles