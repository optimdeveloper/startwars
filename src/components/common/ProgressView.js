import React from 'react'
import { Image, StyleSheet, Text, View, ActivityIndicator } from 'react-native'
import { Colors, Fonts } from '../../constants'

const ProgressView = ({ message, image }) => {
    return (
        <View style={styles.container}>
            <ActivityIndicator size={"large"} color={Colors.buttonColor} />
            <Text style={styles.textStyle}>{message}</Text>
        </View>
    )
}

export default ProgressView

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 24,
        backgroundColor: "transparent"
    },

    textStyle: {
        marginTop: 10,
        color: Colors.grayColor,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._19px,
        textAlign: 'center'
    },
    imageStyle: {
        width: 80,
        height: 80,
    }
})