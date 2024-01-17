import { View, Text, Dimensions } from 'react-native'
import React from 'react'
import MarginHW from '../../common/MarginHW'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize';

const height = Dimensions.get('window').height;


const Styles = {
  main:{flex:1,top:MarginHW.MarginH30},
  mainText:{color:'black',fontFamily:fonts.PoppinsMedium,fontSize:FontsSize.size20,letterSpacing:0.3},
  InputView:{marginVertical:-MarginHW.MarginH12},
  subtext:{color:'grey',fontFamily:fonts.PoppinsMedium,fontSize:14,letterSpacing:0.3,marginHorizontal:MarginHW.MarginH30},
  submit:{marginHorizontal:MarginHW.MarginH10,alignItems:'center',marginVertical:MarginHW.MarginH20}
}

export default Styles