import React from 'react'
import { Image, StyleSheet, View } from 'react-native'
import { Colors, Fonts, Images, wp, hp } from '../../constants'
import { MyText, MyNetworkImage, Clickable } from '../common'

const FoodItem = ({ style, image, name, onPress }) => {
    return (
        <Clickable onPress={onPress} style={[styles.mainView, style]} >


            <MyNetworkImage style={styles.imageStyle} source={{ uri: image }} />
            <MyText style={styles.foodNameStyle} text={name} />
        </Clickable>
    )
}

export default FoodItem

const styles = StyleSheet.create({
    mainView: {
        alignItems: "center",
        marginEnd: 10,
        marginBottom: 10
    },
    innerView: {
        width: wp(28),
        height: wp(28),
        borderRadius: 59,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,

    },

    foodNameStyle: {
        marginTop: 12,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        color: Colors.grayColor
    },
    imageStyle: {
        width: wp(28),
        height: wp(28),
        borderRadius: 59,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: Colors.white,

    }

})