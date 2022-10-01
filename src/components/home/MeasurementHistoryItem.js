import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { Colors, Fonts, hp, Images, Utils, wp } from '../../constants'
import { SeperatorView } from '../CommonComponents'

const MeasurementHistoryItem = ({ image, style, price, item, index, address, buttonText, onClickButton, onPress }) => {
    return (
        <View style={[styles.topView]} onPress={onPress}>

            <View style={styles.mainView}>
                <View style={styles.rowView}>
                    <Text style={[styles.textWorkoutType, { fontSize: Fonts.size._16px }]}>{Utils.formatDate(item.date, "DD MMM YYYY",)}</Text>


                </View>

                <View style={styles.rowView}>

                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Waist </Text>
                        <Text style={styles.textWorkoutType}>{item.waist} in</Text>

                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Chest </Text>
                        <Text style={styles.textWorkoutType}>{item.chest} in</Text>

                    </View>


                </View>

                <View style={styles.rowView}>

                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Left Arm </Text>
                        <Text style={styles.textWorkoutType}>{item.left_arm} in</Text>

                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Right Arm </Text>
                        <Text style={styles.textWorkoutType}>{item.right_arm} in</Text>

                    </View>


                </View>

                <View style={styles.rowView}>

                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Left Thigh </Text>
                        <Text style={styles.textWorkoutType}>{item.left_thigh} in</Text>

                    </View>
                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Right Thigh </Text>
                        <Text style={styles.textWorkoutType}>{item.right_thigh} in</Text>

                    </View>


                </View>

                <View style={styles.rowView}>

                    <View style={styles.rowView}>
                        <Text style={styles.textWorkoutUnit}>Hips </Text>
                        <Text style={styles.textWorkoutType}>{item.hips} in</Text>

                    </View>


                </View>

                <View style={[styles.rowView, { marginVertical: 12 }]}>
                    {["#Fitness", "#Exercise", "#gym", "#workout"].map((item) => {

                        return <View style={styles.chip}>
                            <Text style={styles.chipText}>{item}</Text>
                        </View>
                    })}

                </View>

            </View>

        </View >
    )
}

export default MeasurementHistoryItem

const styles = StyleSheet.create({
    topView: {
        marginHorizontal: 16,
        marginVertical: 4
    },
    mainView: {

        borderRadius: 11,
        backgroundColor: Colors.black,
        padding: 15
    },
    setStyle: {
        borderRadius: 10,
        borderColor: Colors.buttonColor,
        borderWidth: 1,
        marginTop: 8,
        paddingHorizontal: 8,
        paddingVertical: 8
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
        fontSize: Fonts.size._14px,
        color: Colors.white,

    },
    textNote: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._12px,
        marginTop: 8,
        color: Colors.white,

    },
    setNoteView: {
        borderBottomWidth: 1,
        borderColor: Colors.white,

    },
    textWorkoutCount: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._11px,
        marginStart: 8,

        color: Colors.editTextHintColor
    },
    textWorkoutUnit: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        marginEnd: 8,

        color: Colors.editTextHintColor
    },
    textDate: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        marginTop: 8,

        color: Colors.editTextHintColor
    },
    textEdit: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        marginTop: 8,

        color: Colors.buttonColor
    },
    chipText: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._11px,

        color: Colors.white
    }

})