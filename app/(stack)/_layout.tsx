import { View, Text } from 'react-native'
import React from 'react'
import { Stack } from 'expo-router'

const _layoutStack = () => {
  return (
  <Stack
  screenOptions={{
    headerShown:true,
    headerShadowVisible:false,
    contentStyle:{
        backgroundColor:'white'
    }  
  }}
  >
    <Stack.Screen
    name='home/index'
    options={{
        title:'Home'
    }}
    ></Stack.Screen>
        <Stack.Screen
    name='profile/index'
    options={{
        title:'Perfil'
    }}
    ></Stack.Screen>
    <Stack.Screen
    name='products/index'
    options={{
        title:'Productos'
    }}
    ></Stack.Screen>
    <Stack.Screen
    name='settings/index'
    options={{
        title:'Configuracion'
    }}
    ></Stack.Screen>
  </Stack>
  )
}

export default _layoutStack