import React from 'react'
import {Text,TouchableOpacity} from 'react-native'

export default function CreateButton({onPress,styles,text,color}){
    return(
        <TouchableOpacity 
        onPress={onPress} 
        style={[styles.iosBtn,{backgroundColor:color}]}
        >
            <Text style={styles.submitBtnText}>
                {text}
            </Text>
        </TouchableOpacity>
    )
}