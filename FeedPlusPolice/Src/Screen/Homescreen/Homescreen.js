import { collection, doc, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { SafeAreaView,View,FlatList,StyleSheet,Text,TouchableOpacity, Image,} from 'react-native';
import { auth, db } from '../../Service/Service';
import MarginHW from '../../common/MarginHW';
import FontsSize from '../../common/FontsSize';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Helper from '../../common/Helper';
import ImagePath from '../../common/ImagePath';
import { useSelector } from 'react-redux';
import { handleNavigation } from '../../../Routes/Routes';


const Homescreen = () => {
const [Data, setData] = useState([]); 
const [user,setUser] = useState();
const [stationName, setstationName] = useState(); 

  useEffect(() => {
   

    fetchData()
    
   
  }, []);
  
 const HandleLogout = () => {
  signOut(auth).then(() => {
    handleNavigation({ type: 'setRoot', navigation: props.navigation, page: 'Login' })
  }).catch((error) => {
    Helper.showToast(error.message)
  });
 }
 
  const fetchData = async () => { 
    try {
      const querySnapshot = await getDocs(
          query(collection(db, 'Stations'), where('UID', '==',user))

      );
      
     querySnapshot.forEach(async(doc) => {
      console.log('Document.Stationname', doc.data().stationName);
      fetchFeedback(doc.data().stationName);
      // await setstationName(doc.data().stationName);
      });
      
    } catch (error) {
      Helper.showToast(error.message)
    }
  };
  const fetchFeedback = async (Name) => {
    try {
      const querySnapshot = await getDocs(
        query(collection(db, 'Feedbacks'), where('StationName', '==', Name))
      );
      
      querySnapshot.forEach(async(doc) => {
        await console.log('Document???', doc.data());
        setData(doc.data());
      });
      console.log('Data???????',Data);
    } catch (error) {
      Helper.showToast(error.message)
    }
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
   
    
  ;
  return (
    <SafeAreaView style={styles.container}>

      <View>
        <TouchableOpacity onPress={HandleLogout}>
        <Image source={ImagePath.logout} style={{alignSelf:'flex-end',margin:MarginHW.MarginH20,padding:MarginHW.MarginH20}} resizeMode='contain'/>
        </TouchableOpacity>
        <Text style={{fontSize:FontsSize.size22,fontFamily:'Poppins-Medium',color:'black',alignSelf:'center',marginTop:MarginHW.MarginH40}}>Feedbacks</Text>
      </View>
      <View style={{marginTop:MarginHW.MarginH10}}>
       
      <FlatList
        showsVerticalScrollIndicator={false}
        data={Data}
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

export default Homescreen;