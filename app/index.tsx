import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { Link,Redirect } from 'expo-router'

const index = () => {
    return (
        <Redirect href="../tabs" ></Redirect>
        // <SafeAreaView>
        //     <View className=''>
        //         <Text className='text-primary text-3xl font-WorkSans'>index</Text>
        //         <Text className='text-orange-500 text-3xl font-WorkSansM'>index</Text>
        //         <Text className='text-orange-500 text-3xl font-WorkSansL'>index</Text>
        //     </View>
        //     <Link href='./products' className='text-2xl text-terciary'>Productos</Link>
        // </SafeAreaView>
    )
}

export default index