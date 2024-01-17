import { View, Text, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native'
import { Button } from 'react-native'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import CustomButton from '../../common/CustomButton'
import MarginHW from '../../common/MarginHW'
import ImagePath from '../../common/ImagePath'
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../../Service/Service'
import { handleNavigation } from '../../../Routes/Routes'
import Helper from '../../common/Helper'





const Registration = (props) => {
  const [email,setEmail]=useState('')
  const [name,setName]=useState('')
  const [Error,setError]=useState('')
  const [password,setPassword]=useState('')
  const HandleSignup=()=>{
   if( email=='' || name=='' || password==''){
      setError('Please fill all the fields')
      
   }else{
   createUserWithEmailAndPassword(auth,email, password)
      .then(() => {
        var user = userCredential.user;
        Helper.showToast('Registration Successful')
        handleNavigation({type:'setRoot',navigation:props.navigation,page:'Login'})
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log('Code',errorCode)
        console.log('Message',errorMessage)
      });}
    
      }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEF5FF' }}>
      <Image source={ImagePath.bgimage} style={Styles.logoimage}/>
      <KeyboardAwareScrollView>
        <Text style={[Styles.maintext,{marginVertical:MarginHW.MarginH10}]}>Registration</Text>
        <View style={{bottom:MarginHW.MarginH10}}>
          <CustomInput
            placeholder="Enter Full Name"
            placeholderTextColor={'grey'}
            onChangeText={(text)=>{setError(''),setName(text)}}
          />
        </View>

        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Enter Your Email"
            placeholderTextColor={'grey'}
            value={email}
            onChangeText={(text)=>{setError(''),setEmail(text)}}
          />
        </View>

        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Enter password"
            placeholderTextColor={'grey'}
            value={password}
            onChangeText={(text)=>{setError(''),setPassword(text)}}
          />
        </View>
        <View style={{bottom:MarginHW.MarginH20}}>
          <CustomInput
            placeholder="Confirm password"
            placeholderTextColor={'grey'}
          />
        </View>
       <View style={{alignSelf:'center'}}>
        <Text style={{color:'red'}}>{Error}</Text>
       </View>
        <View style={{ alignItems: 'center' }}>
          <CustomButton title={'Registration'} Onclick={HandleSignup} />
        </View>

      </KeyboardAwareScrollView>

      <View style={{ flexDirection: "row",justifyContent:'center',alignItems:'center' }}>
        <Text Styles={[Styles.subtext,{color:'black'}]}>Already have an Account?</Text>
        <TouchableOpacity onPress={()=>props.navigation.navigate('Login')}>
          <Text style={[Styles.subtext, { color: 'black', paddingLeft: MarginHW.MarginW10, textDecorationLine: 'underline' }]}>Login</Text>
        </TouchableOpacity>

      </View>
    </SafeAreaView>
  )
}

export default Registration