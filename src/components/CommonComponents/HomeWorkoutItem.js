import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, hp, Images, wp } from '../../constants'

const HomeWorkoutItem = ({ image, style, price, item, index, address, buttonText, onClickButton, onPress }) => {
    return (
        <View style={[styles.topView, { marginStart: index == 0 ? 16 : 0 }]} onPress={onPress}>
            <View style={styles.imageView}>
                <Image style={styles.imageStyle} source={{ uri: item.default_muscle_group_image }} />
            </View>
            <View style={styles.mainView}>
                <View style={styles.borderView}>
                    <Text style={styles.textWorkoutType}>{item.default_muscle_group_name}</Text>
                </View>
                <View style={styles.bottomView}>
                    <Text style={styles.textWorkoutCount}>{item.weight} <Text style={styles.textWorkoutUnit}>lbs lifted</Text></Text>
                    <Image source={Images.ic_download} />

                </View>
            </View>
        </View>
    )
}

export default HomeWorkoutItem

const styles = StyleSheet.create({
    topView: {

        flexDirection: "row",
        padding: 10,
        alignItems: "center",
        borderRadius: 14, marginEnd: 8,
        backgroundColor: Colors.black,
    },
    mainView: {

        marginStart: 8,
    },
    borderView: {
        borderRadius: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: "#FFFFFF15"
    },
    bottomView: {
        flexDirection: "row",
        alignItems: "center",

    },
    imageView: {
        backgroundColor: "#FFFFFF05",
        borderRadius: 8,
        width: 50,
        height: 50,
        justifyContent: "center", alignItems: "center"
    },
    innerView: {

        paddingStart: 16,
        paddingEnd: 16,
        paddingBottom: 16,
        paddingTop: 30

    },
    belowView: {

        paddingVertical: 16,
        paddingBottom: 16,
        paddingTop: 30

    },
    imageStyle: {

        width: 24,
        height: 24,
        resizeMode: "contain"
    },
    buttonStyle: {
        width: wp(20),
        height: hp(5),

    },
    textWorkoutType: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        color: Colors.white
    },
    textWorkoutCount: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._18px,
        color: Colors.white,
        marginEnd: 8,
    },
    textWorkoutUnit: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._11px,
        color: Colors.editTextHintColor
    },
    addressStyle: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        marginTop: 3,
        color: "#CCCCCC"
    }

})