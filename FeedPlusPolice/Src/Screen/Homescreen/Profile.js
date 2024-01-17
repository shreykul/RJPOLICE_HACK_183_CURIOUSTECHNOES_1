// ProfileScreen.js
import { View, Text,  TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView,FlatList,StyleSheet} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context'
import fonts from '../../common/fonts'
import FontsSize from '../../common/FontsSize'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import { Colors } from '../../common/color'
import CustomButton from '../../common/CustomButton'
import MarginHW from '../../common/MarginHW'
import ImagePath from '../../common/ImagePath'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { auth } from '../../Service/Service'
import { handleNavigation } from '../../../Routes/Routes'



const Card = ({ title, value }) => (
  <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 8, margin: 8 }}>
    <Text style={{ fontSize: FontsSize.size16, fontFamily: 'Poppins-Medium', color: 'black' }}>{title}: {value}</Text>
  </View>
);

const ProfileScreen = (props) => {
  // Dummy profile data
  const profileData = {
    name: 'SHYAM NAGAR POLICE STATION',
    address: 'Shyam Nagar, Jaipur, Rajasthan 302019',
    username: 'john_doe',
  };

  const renderItem = ({item}) => {
    console.log('Item?????',item)
        return(
         
          <View style={[styles.item,{flexDirection:'row',justifyContent:'space-evenly'}]}>
            <View style={{flex:0.4}}>
            <Text style={styles.title}>{'Station Name:'}</Text>
            <Text style={styles.title}>{'Message:'}</Text>
            <Text style={styles.title}>{'Username:'}</Text>
    
            </View>
            <View style={{flex:0.9,left:10}}>
            <Text style={styles.title}>{item.StationName}</Text>
            <Text style={styles.title}>{item.message}</Text>
            <Text style={styles.title}>{item.username}</Text>
            </View>
           
          </View>  
          
        )
      }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EEF5FF' }}>
      <View>
        <Card title="Name" value={profileData.name} />
        <Card title="Address" value={profileData.address} />
        <Card title="Username" value={profileData.username} />

        <View style={{ alignItems: 'center', marginVertical: MarginHW.MarginH30 }}>
          <CustomButton title={'Show Feedbacks'} Onclick={() => handleNavigation({ type: 'push', navigation: props.navigation, page: 'Homescreen' })} />
        </View>

        <FlatList
        showsVerticalScrollIndicator={false}
        data={profileData }
        renderItem={renderItem}
      />

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF5FF',
  },
  item: {
    backgroundColor: 'white',
    padding: MarginHW.MarginH10,
    marginTop: MarginHW.MarginH20,
    marginHorizontal: MarginHW.MarginH20,
    borderRadius: 10,
    flex:1
  },
  title: {
    fontSize:FontsSize.size16,
    fontFamily:'Poppins-Medium',
    color:'black',
    height:MarginHW.MarginH50
  },
});

export default ProfileScreen;
