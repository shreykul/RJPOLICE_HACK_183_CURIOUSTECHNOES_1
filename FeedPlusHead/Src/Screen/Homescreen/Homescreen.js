import { collection, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView,View,FlatList,StyleSheet,Text,TouchableOpacity, Image,} from 'react-native';
import { auth, db } from '../../Service/Service';
import MarginHW from '../../common/MarginHW';
import ImagePath from '../../common/ImagePath';
import ImageSize from '../../common/ImageSize';
import { signOut } from 'firebase/auth';
import { handleNavigation } from '../../../Routes/Routes';



const Homescreen = () => {
const [data, setData] = useState([]); 
  useEffect(() => {
   

    fetchData();
  }, []);
  
  console.log('Data', data);
  
  const HandleLogout = () => {
    signOut(auth).then(() => {
      handleNavigation({ type: 'setRoot', navigation: props.navigation,page: 'Login' })
    });
  }

  const fetchData = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'Feedbacks'));
      const feedbacksData = querySnapshot.docs.map((doc) => (
        {
       ...doc.data(),
      }));
      setData(feedbacksData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const renderItem = ({item}) => {

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
   
    
  ;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity onPress={HandleLogout}>
          <Image source={ImagePath.logout} resizeMode='contain'style={{alignSelf:'flex-end',margin:MarginHW.MarginH10,padding:MarginHW.MarginH20}}/>
        </TouchableOpacity>
        <Text style={{fontSize:20,fontFamily:'Poppins-Medium',color:'black',alignSelf:'center',marginTop:MarginHW.MarginH40}}>Feedbacks</Text>
      </View>
      <View style={{marginTop:MarginHW.MarginH10,marginBottom:MarginHW.MarginH100}}>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data}
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
    fontSize: 15,
    fontFamily:'Poppins-Medium',
    color:'black',
    height:MarginHW.MarginH50
  },
});

export default Homescreen;