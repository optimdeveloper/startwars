import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts } from '../../constants'

const NoDataView = ({ message, image }) => {
    return (
        <View style={styles.container}>
            {image ? <Image style={styles.imageStyle} source={image} /> : null}
            <Text style={styles.textStyle}>{message}</Text>
        </View>
    )
}

export default NoDataView

const styles = StyleSheet.create({

    container: {
        flex: 1,
        padding: 0,
        backgroundColor: "transparent"
    },

    textStyle: {
        color: Colors.red,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        textAlign: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
    }
})