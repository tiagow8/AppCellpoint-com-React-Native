import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'

// Screens

import LoginScreen from '../screens/LoginScreen'
import CadastroScreen from '../screens/CadastroScreen'
import PerfilScreen from '../screens/PerfilScreen'
import WebScreen from '../screens/WebScreen'

const Stack = createNativeStackNavigator()

export default props => {

  return(
    <Stack.Navigator initialRouteName='LoginScreen'> 

      <Stack.Screen name="LoginScreen" 
                    component={ LoginScreen }
                    options={ { headerShown: false } }
      />
      <Stack.Screen name="CadastroScreen" 
                    component={ CadastroScreen }
      />
      <Stack.Screen name="PerfilScreen" 
                    component={ PerfilScreen }
      />
      <Stack.Screen name="WebScreen" 
                    component={ WebScreen }
      />
    
    </Stack.Navigator>
  )
}