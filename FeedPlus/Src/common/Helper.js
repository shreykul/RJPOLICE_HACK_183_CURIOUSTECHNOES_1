import { View, Text } from 'react-native'
import React from 'react'
import Toast from 'react-native-root-toast';

const Helper =  {
    async showToast(msg) {
        Toast.show(msg, {
          duration: Toast.durations.SHORT,
          position: Toast.positions.BOTTOM,
          shadow: true,
          animation: true,
          hideOnPress: true,
           containerStyle: {backgroundColor:'rgba(0,0,0,0.7)', width: '70%',}
  
});
}
}

export default Helper