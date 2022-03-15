import React from 'react'
import { View, TextInput, TouchableOpacity, StyleSheet } from 'react-native'

// Icon
import { Ionicons } from '@expo/vector-icons';

import { Colors, Metrics } from '../values'

export default props => {

  const { style, ...rest } = props

  return(
    <View style={ [Estilo.container, style] }>
      <TextInput style={ Estilo.input } 
          { ...rest }
      />
      <TouchableOpacity>
        <Ionicons name="eye-off-sharp" size={24} color={ Colors.dark } />
      </TouchableOpacity>
    </View>
    
  )
}

const Estilo = StyleSheet.create(
  {
    container: {
      flexDirection: 'row',
      height: 48,
      borderWidth: 1,
      borderRadius: Metrics.radius.base,
      backgroundColor: Colors.white,
      alignItems: 'center',
      paddingHorizontal: Metrics.padding.base
      
    },
    input: {
      flexGrow: 1,
      marginRight: Metrics.margin.small,
      paddingVertical: Metrics.padding.small
    }
  }
)