import { StyleSheet } from "react-native";
import { wp, Fonts, Colors } from "../../constants";

export default styles = StyleSheet.create({
    imgBackgroundStyle: {

        height: 82,
        margin: 16,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    topBarStyle: {
        flex: 1,
        marginBottom: 8
    },
    dropDownStyle: {
        flex: 1,
        marginHorizontal: 16,
    },
    imgbgInnerViewStyle: {
        flex: 1,


    },
    arrowStyle: {
        marginEnd: 20
    },
    todayTextStyle: {
        fontSize: Fonts.size._11px,
        fontWeight: "400",
        color: Colors.editTextHintColor,
        fontFamily: Fonts.name.regular,
    },
    dateTextStyle: {
        fontSize: Fonts.size._14px,
        fontWeight: "500",
        color: Colors.white,
        fontFamily: Fonts.name.regular,
    },
    calenderTextStyle: {
        fontSize: Fonts.size._22px,
        fontWeight: "400",
        color: Colors.white,
        fontFamily: Fonts.name.regular
    },
    dateStyle: {
        fontSize: Fonts.size._22px,
        fontWeight: "400",
        color: Colors.white,
        fontFamily: Fonts.name.regular
    },
    dayStyle: {
        fontSize: Fonts.size._14px,
        fontWeight: "400",
        color: Colors.white,
        fontFamily: Fonts.name.regular
    }


})