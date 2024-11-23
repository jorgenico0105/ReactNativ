import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link, Redirect, router } from 'expo-router'
import CutomButton from '@/components/shared/CutomButton'

const HomePage = () => {
  return (
    <SafeAreaView>
      <View className='px-10 mt-5'>
        <Link href='../products' asChild>
          <CutomButton
            children='Products'
            color='bg-primary'
            className='mb-5'
          >
          </CutomButton>
        </Link>
        <Link href='../profile' asChild>
          <CutomButton
            children='Profile'
            color='bg-secondary'
            className='mb-5'
          >
          </CutomButton>
        </Link>
        <CutomButton
          color='bg-terciary'
          children='Ajustes'
          onPress={()=>router.push('../settings')}
          className='mb-5'
        >
        </CutomButton>
        {/* <Text className='mb-5'>HomePage</Text>
      <Link className='mb-5' href='../profile'>Profile</Link>
      <Link className='mb-5' href='../products'>Productos</Link>
      <Link className='mb-5' href='../settings'>Settins</Link> */}
      </View>
    </SafeAreaView>

  )
}

export default HomePage