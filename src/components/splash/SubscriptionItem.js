import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, hp, Images, wp } from '../../constants'
import { Clickable } from '../common'
import { SeperatorView } from '../CommonComponents'

const periods = {
    P1M: "1 Month",
    P6M: "6 Months",
    P1Y: "1 Year",
}

const SubscriptionItem = ({ item, selected, onPress }) => {
    return (
        <Clickable style={[styles.topView,]} onPress={onPress}>

            <View style={[styles.mainView, { borderWidth: selected ? 1 : 0, borderColor: Colors.buttonColor }]}>
                <View style={styles.rowView}>

                    <Text style={styles.textWorkoutUnit}>{item.title} </Text>
                    <Text style={styles.textWorkoutType}>{item.localizedPrice}</Text>


                </View>
                <View style={styles.rowView}>

                    <Text style={styles.textWorkoutCount}>{item.description} </Text>
                    <Text style={styles.textWorkoutCount}>{periods[item.subscriptionPeriodAndroid] || ""} </Text>

                </View>
            </View>
        </Clickable >
    )
}

export default SubscriptionItem

const styles = StyleSheet.create({
    topView: {
        marginHorizontal: 16,
        marginTop: 10,
        elevation: 10,
    },
    mainView: {

        borderRadius: 11,
        backgroundColor: Colors.black,
        padding: 15
    },
    borderView: {
        borderRadius: 10,
        padding: 4,
        borderWidth: 1,
        borderColor: "#FFFFFF15"
    },
    rowView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginVertical: 4,

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

        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around"

    },
    imageStyle: {

        width: 24,
        height: 24,
        resizeMode: "contain"
    },
    chip: {
        backgroundColor: "#935DDA",
        paddingHorizontal: 10,
        paddingVertical: 5, borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    textWorkoutType: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._16px,
        color: Colors.buttonColor,

    },
    textWorkoutCount: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,

        color: Colors.editTextHintColor
    },
    textWorkoutUnit: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._18px,
        marginEnd: 8,

        color: Colors.white
    },
    chipText: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._11px,

        color: Colors.white
    }

})