import { View, Text } from 'react-native'
import React from 'react'
import WebView from 'react-native-webview'

const Maps = () => {
  return (
    <View style={{flex:1}}>
     <WebView source={{ uri: 'https://www.google.com/maps/@26.9048432,75.7720324,15z?entry=ttu' }} style={{ flex: 1 }} />
    </View>
  )
}

export default Maps