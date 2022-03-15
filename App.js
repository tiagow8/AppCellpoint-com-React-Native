import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

// React - navigation
import { NavigationContainer } from '@react-navigation/native'

import Stack from './routes/Stack'

export default () => (
  <NavigationContainer> 
    <Stack />
  </NavigationContainer>
)
