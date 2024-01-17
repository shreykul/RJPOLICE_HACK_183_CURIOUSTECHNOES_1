import { View, Text, Image } from 'react-native'
import React from 'react'
import ImagePath from './ImagePath'
import ImageSize from './ImageSize'
import MarginHW from './MarginHW'
import fonts from './fonts'
import FontsSize from './FontsSize'
import { handleNavigation } from '../../Routes/Routes'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../Service/Service'

const Splash = (props) => {

setTimeout(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log('User is signed in');
      console.log('User:', user);
   handleNavigation({ type: 'setRoot', navigation: props.navigation, page: 'Homescreen' })
    } else {
      console.log('No user is signed in');
   handleNavigation({ type: 'setRoot', navigation: props.navigation, page: 'Login' })

    }
  });
}, 3000);

  return (
    <View  style={{flex:1,backgroundColor:'#EEF5FF'}}>
     <Image source={ImagePath.App_logo} style={Styles.logoimage}/>
     <View style={{alignItems:'center',marginVertical:MarginHW.MarginH40}}>
     <Text style={{color:'black',fontFamily:fonts.PoppinsMedium,fontSize:FontsSize.size26,letterSpacing:0.3}}>FeedPlus</Text>
     </View>
    </View>
  )
}
const Styles = {
logoimage:{width:ImageSize.ImageW100,height:ImageSize.ImageH115,alignSelf:'center',marginTop:MarginHW.MarginH100}
}

export default Splash