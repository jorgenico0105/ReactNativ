import { View, Text } from 'react-native'
import React from 'react'
import { router, useLocalSearchParams } from 'expo-router'
import { products } from '@/db/data';

const Product = () => {
const {id}=useLocalSearchParams();
const producto=products.find(product=>product.id==id)
if(!producto){
    return router.push('../home')
}
  return (
    <View className='px-5 mt-5'>
      <Text className='font-WorkSans text-2xl'>{producto.title}</Text>
      <Text className='font-WorkSansL'>{producto.description}</Text>
      <Text className='font-WorkSans'>{producto.price}</Text>
    </View>
  )
}

export default Product