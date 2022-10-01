import React from 'react'
import { View, Text } from 'react-native'
import CommonStyle from './CommonStyle'

const MyText = ({ text, style, onPress, numberOfLines }) => {
    return (
        <Text onPress={onPress} numberOfLines={numberOfLines} style={[CommonStyle.commonTextTitleStyle, style]}>{text}</Text>
    )
}

export default MyText
