import { View, Text, Image, Dimensions } from 'react-native'
import React from 'react'
import ImagePath from '../../common/ImagePath'
import MarginHW from '../../common/MarginHW'
import { set } from 'firebase/database'
import { handleNavigation } from '../../../Routes/Routes'

const Success = (props) => {
    setTimeout(() => {  
        handleNavigation({type:'setRoot',navigation:props.navigation,page:'Homescreen'})
    },1000);
  return (
    <View>
      <Image source={ImagePath.success} resizeMode='contain' style={{height:200,width:200,alignSelf:'center',top:Dimensions.get('screen').height/4}}/>
      <Text style={{alignSelf:'center',fontSize:20,fontWeight:'700',top:Dimensions.get('screen').height/4+MarginHW.MarginH20}}>Feedback Submitted</Text>
    </View>
  )
}

export default Success