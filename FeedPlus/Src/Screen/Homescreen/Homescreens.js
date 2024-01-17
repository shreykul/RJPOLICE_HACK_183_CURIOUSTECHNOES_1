import { View, Text, FlatList, TouchableOpacity, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import Styles from './Styles'
import CustomInput from '../../common/CustomInput'
import MarginHW from '../../common/MarginHW'
import CustomButton from '../../common/CustomButton'
import { collection, doc, getDoc, getDocs, setDoc } from 'firebase/firestore'
import { auth, db } from '../../Service/Service'
import Custom_Drop_Down from '../../common/Custom_Drop_Down'
import Helper from '../../common/Helper'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { signOut } from 'firebase/auth'
import ImagePath from '../../common/ImagePath'
import ImageSize from '../../common/ImageSize'
import { handleNavigation } from '../../../Routes/Routes'



const Homescreens = (props) => {
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState([])
  const [name, setName] = useState();
  const [FIR, setFIR] = useState();
  const [FIRData, setFIRData] = useState();
  const [Error, setError] = useState();
  const [feedback, setfeedback] = useState();
  const [selectedStation, setSelectedStation] = useState();
  const [selectedStationId, setSelectedStationId] = useState();


  useEffect(() => {
   

    fetchData();
    fetchFIR();
  }, []);

  console.log('Data', data);

  const HandleLogout = () => {
    signOut(auth).then(() => {
      handleNavigation({ type: 'setRoot', navigation: props.navigation, page: 'Login' })
    }).catch((error) => {
     console.log('error',error); // An error happened.
    }
  )}


  const fetchFIR = async () => {
    try {
       const querySnapshot = await getDocs(collection(db, 'Feedbacks'));
       const FIRData = querySnapshot.docs.map((doc) => (

         {
        ...doc.data(),
       }));
       setFIRData(FIRData);
       
     } catch (error) {
       console.error('Error fetching data:', error);
     }
   };

  const fetchData = async () => {
   try {
      const querySnapshot = await getDocs(collection(db, 'Stations'));
      const feedbacksData = querySnapshot.docs.map((doc) => (
        {
        label: doc.data()?.stationName, 
        value: doc.data()?.stationId,
      }));
      setData(feedbacksData);
      
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  const HandleSubmit= ()=>{
    setLoading(true)
    if(!name || !FIR || !feedback || !selectedStationId || !selectedStation || Error){
      setLoading(false)
      setError('Please Fill All Fields')
    }else if(FIRData?.some((item) => item.FIR === FIR)){
      setLoading(false)
      setError('FIR already exists')
    } else{ 
  const cityRef = doc(collection(db, 'Feedbacks'));
setDoc(cityRef, { username:name ,FIR:FIR,stationId:selectedStationId , StationName: selectedStation, message:feedback })
.then((userCredential) => {
  setLoading(false)
  Helper.showToast('Feedback Submitted Successfully')
  handleNavigation({type:'setRoot',navigation:props.navigation,page:'Success'})
})
.catch((error) => {
  console.log('error',error)
  setLoading(false)
  // Helper.showToast(error)
 
})}};
  return (
    <View style={{flex:1,backgroundColor:'#EEF5FF'}}>
      <TouchableOpacity onPress={HandleLogout} style={{padding:MarginHW.MarginH10,alignSelf:'flex-end'}}>
        <Image source={ImagePath.off} resizeMode='contain' style={{height:ImageSize.ImageH30,width:ImageSize.ImageH30}}/>
      </TouchableOpacity>
      <View style={{flex:1,alignSelf:'center',marginTop:MarginHW.MarginH30}}>
        <Text style={[Styles.mainText]}>Submit your Feedback</Text>
      </View>
      <KeyboardAwareScrollView>
        <View style={Styles.main}>
      <View style={Styles.InputView}>
        <Text style={Styles.subtext}>Name</Text>
        <View style={{bottom:MarginHW.MarginH20}}>
        <CustomInput 
        placeholder={'Enter your Name'}
        onChangeText={(text)=>{setError(''),setName(text)}}
        />
        
        </View>
      </View>

      <View style={Styles.InputView}>
      <Text style={Styles.subtext}>FIR number</Text>
      <View style={{bottom:MarginHW.MarginH20}}>
      <CustomInput 
      placeholder={'Enter your FIR number'}
      onChangeText={(text)=>{setError(''),setFIR(text)}}
      />
      </View>
      </View>
      {FIRData?.some((item) => item.FIR === FIR) && (
  <Text style={{ color: 'red', alignSelf: 'center', bottom: MarginHW.MarginH20 }}>
    {'FIR already exists'}
  </Text>
)}

    
      <View style={Styles.InputView}>
      <Text style={Styles.subtext}>Feedback</Text>
      <View style={{bottom:MarginHW.MarginH20}}>
      <CustomInput 
      placeholder={'Enter your feedback'}
      onChangeText={(text)=>{setError(''),setfeedback(text)}}
      />
      </View>
      </View>


      <View style={Styles.InputView}>
      <Text style={Styles.subtext}>Stations</Text>
      <View style={{marginHorizontal:MarginHW.MarginH20}}>
     <Custom_Drop_Down
     value={selectedStationId}
     placeholderName={'Select Station'}
      list_item={data}
      SelectValue={(item) => {setError(''),setSelectedStation(item.label), setSelectedStationId(item.value)}}
     />
     </View>
      </View>
    <View>
      <Text style={{color:'red',alignSelf:'center',marginVertical:MarginHW.MarginH10}}>{Error}</Text>
    </View>
    <View style={Styles.submit}>
    <CustomButton
    title={'Submit'}
    loading={loading}
    Onclick={HandleSubmit}
    />
      
    </View>
    </View>
    </KeyboardAwareScrollView>
    </View>
   
  )
}

export default Homescreens