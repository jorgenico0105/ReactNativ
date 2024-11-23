import { View, Text,SafeAreaView,FlatList } from 'react-native'
import React from 'react'
import {products} from '@/db/data'
import { Link } from 'expo-router'


const ProductsPage = () => {
    
    return (
        <SafeAreaView className='flex flex-1'>
            <FlatList
            data={products}
            keyExtractor={(item)=>item.id}
            renderItem={({item})=>
            <View className='mt-5 p-4'>
                <Text className='text-2xl font-WorkSans'>{item.title}</Text>
                <Text className=''>{item.description}</Text>
                <View className='flex flex-row justify-center gap-5'>
                    <Text className='font-WorkSans'>{item.price}</Text>
                    <Link href={`./products/${item.id}`} className='text-primary' >Ver detalles</Link>
                </View>
            </View>}
            ></FlatList>
        </SafeAreaView>

    )
}

export default ProductsPage