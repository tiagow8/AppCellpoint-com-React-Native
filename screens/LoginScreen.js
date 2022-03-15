import React from 'react'
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native'

import {Colors, Metrics } from '../values'

import { MyTextInput, MyPasswordInput, MyButton } from '../components'

export default props => {

  return(
    <View style={ Estilo.container }> 

      <View style={ Estilo.containerLogin }> 
      
        <View style={ Estilo.containerLogoCellep}>
          <Image source={ require('../assets/logo_cellep.png') } />
        </View>

        <MyTextInput placeholder='E-mail' 
                     style={ Estilo.formItem }
                     keyboardType="email-address"
        />

        <MyPasswordInput placeholder="Senha"
                         style={ Estilo.formItem }
                         keyboardType="numeric"
        />

        <MyButton title="Entrar" 
                  style={ Estilo.formItem }
        />

        <View style={ Estilo.containerCadastro }> 
          <Text style={ Estilo.cadastroText }> 
            Não tem cadastro?
          </Text>
          <TouchableOpacity> 
            <Text style={ Estilo.cadastroTextTouch }> 
              Clique Aqui
            </Text>
          </TouchableOpacity>
        </View>

      </View>

      <View style={ Estilo.containerLogoHack }> 
      
        <Image source={ require('../assets/logo_estacao_hack.png') } 
               style={ Estilo.logoEH }
        />

      </View>
      
    </View>
  )
}

const Estilo = StyleSheet.create(
  {
    container: {
      flexGrow: 1,
      backgroundColor: Colors.background,
      padding: Metrics.padding.base
    },
    containerLogin: {
      flexGrow: 1,
      justifyContent: 'center'
    },
    containerLogoCellep:{
      alignItems: 'center',
      marginBottom: Metrics.margin.base
    },
    formItem: {
      marginBottom: Metrics.margin.base
    },
    containerCadastro: {
      flexDirection: 'row',
      justifyContent: 'flex-end'
    },
    cadastroText: {
      color: Colors.white
    },
    cadastroTextTouch: {
      color: Colors.primary,
      fontWeight: 'bold',
      paddingLeft: Metrics.padding.small
    },
    logoEH:{
      width: 100,
      height: 100,
      resizeMode: 'contain'
    },
    containerLogoHack: {
      alignItems: 'flex-end'
    }
  }
)