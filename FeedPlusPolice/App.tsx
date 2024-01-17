import { View, Text } from 'react-native'
import React from 'react'
import Routes from './Routes/Routes'
import { Provider } from 'react-redux'
import { Store } from './Src/Store'

const App = () => {
  return (
    <View style={{flex:1}}>
      <Provider store={Store}>
     <Routes/>
     </Provider>
    </View>
  )
}

export default App