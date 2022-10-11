import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './style';

const CommonButton = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.container}>
            <Text style={styles.btnText}>{props.label}</Text>
        </TouchableOpacity>
    )
}

export default CommonButton;