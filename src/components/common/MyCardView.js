import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Colors } from '../../constants'
import CommonStyle from './CommonStyle'

const MyCardView = ({ style, children, elevation }) => {

    const styles = StyleSheet.create({

        mainView: {
            elevation: 1,
            shadowColor: Colors.grayColor,
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.4,
            shadowRadius: 1,
        }
    })

    return (
        <View style={[CommonStyle.CardStyle, styles.mainView, style]}>
            {children}
        </View>
    )
}

export default MyCardView
