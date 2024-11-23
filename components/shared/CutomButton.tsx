import { View, Text, Pressable, PressableProps } from 'react-native'
import React from 'react'

interface CutomProps extends PressableProps {
    children: string;
    color?: 'bg-primary' | 'bg-secondary' | 'bg-terciary';
    variant?:'contain' | 'text-only'
    className?:string
}

const CutomButton = React.forwardRef(({ children, color, onPress,variant,className }: CutomProps, ref: React.Ref<View>) => {
    if(variant==='text-only'){
        return (
            <Pressable
                className={`p-3 ${className}`}
                onPress={onPress}
                ref={ref}
            >
                <Text className='text-center'>{children}</Text>
            </Pressable>
        )
    }
    return (
        <Pressable
            className={`p-3 rounded-md ${color} active:opacity-80 ${className} `}
            onPress={onPress}
            ref={ref}
        >
            <Text className='text-center text-white'>{children}</Text>
        </Pressable>
    )
})

export default CutomButton