import React from 'react'
import { View, } from 'react-native'
import CommonStyle from './CommonStyle'

const FlexView = ({ children, style }) => {
    return (
        <View style={[CommonStyle.containerStyle, style]}>
            {children}
        </View>
    )
}

export default FlexView
