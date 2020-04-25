import React from 'react'
import {TouchableOpacity,Text} from 'react-native'

export default function SubButton({onPress,style}){
    return (
        <TouchableOpacity onPress={onPress}>
            <Text style={style}>
                Submit
            </Text>
        </TouchableOpacity>
    )
}
