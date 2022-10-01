import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import { MyCardView, MyText, CommonStyle, ButtonWithGradient, Button, MyNetworkImage } from '../common'
import { wp, hp, Images, Colors, Fonts } from '../../constants'

const RestaurantItem = ({ style, imageStyle, onView, name, image, rating }) => {
    return (
        <MyCardView style={[styles.mainView, style]}>
            <MyNetworkImage style={[styles.imageStyle, imageStyle]} source={{ uri: image }} />
            <View style={styles.innerView}>
                <MyText style={styles.resNameStyle} text={name} />
                {onView ? <View style={styles.belowView}>
                    <Image style={{ height: 16, resizeMode: "contain" }} source={Images.forkGold} />
                    <MyText style={styles.ratingStyle} text={rating && rating.toFixed(1)} />
                    {onView ? <Button onPress={onView} style={styles.buttonStyle} bordered title="View" /> : null}
                </View> : null}
            </View>
        </MyCardView>
    )
}

export default RestaurantItem
const styles = StyleSheet.create({

    mainView: {


        backgroundColor: Colors.white,
        marginEnd: 10,
        borderRadius: 8
    },
    innerView: {
        paddingStart: 16,
        paddingBottom: 16,
        paddingTop: 16

    },
    belowView: {
        ...CommonStyle.horizontalContainerStyleWithCenter,

        paddingTop: 8

    },
    imageStyle: {
        width: 150,
        height: 110,
        borderTopEndRadius: 8,
        borderTopStartRadius: 8
    },
    buttonStyle: {
        width: 67,
        height: 30,
        borderRadius: 19,
        marginEnd: 8,
    },
    resNameStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._16px,
        color: Colors.black
    },
    ratingStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._16px,
        color: Colors.black,
        flex: 1,
        marginStart: 8
    }

})