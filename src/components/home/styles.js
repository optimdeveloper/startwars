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
        marginBottom: 8,

    },
    containerWrong: {
        alignItems:"center",
        backgroundColor:Colors.white
    },
    failLoad: {
        color:Colors.red,
        fontSize:Fonts.size._12px,
    },
    content: {
        backgroundColor: Colors.white
    },
    homeTopBarStyle: {
        flex: 1,
        backgroundColor:Colors.white
    },
    dropDownStyle: {
        flex: 1,
        marginHorizontal: 16,
        marginTop:10,
        alignItems:"center",
        paddingBottom:15
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
        fontSize: Fonts.size._18px,
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
    },
    lbsView: {
        borderRadius: 19,
        padding: 27,
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        backgroundColor: Colors.black,
        borderColor: Colors.buttonColor,
        borderWidth: 3

    },
    arrowStyle: {
        marginEnd: 20
    },
    textStyle: {
        fontSize: Fonts.size._14px,
        color: Colors.buttonColor,
        fontFamily: Fonts.name.regular
    },

    textWorkoutCount: {
        fontSize: Fonts.size._22px,
        fontWeight: "400",
        color: "#B468E6",
        fontFamily: Fonts.name.regular
    },
    optionText: {
        fontSize: Fonts.size._22px,
        fontWeight: "400",
        color: "#B468E6",
        fontFamily: Fonts.name.regular
    },
    optionViewContainer: {
        flexDirection: "row",
        justifyContent: "space-between",

    },
    optionView: {
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        height: 86,
        width: 160,
        marginVertical: 8

    },
    optionText: {
        fontSize: Fonts.size._16px,
        color: Colors.white,
        fontWeight: "400",
        marginTop: 8,
        fontFamily: Fonts.name.regular
    },
    bottomView: {

        flexDirection: "row",
        marginHorizontal: 8,
        marginVertical: 16,
        justifyContent: "space-between"

    },
    cardStyle: { elevation: 5, padding: 8, borderRadius: 5, marginVertical: 4, backgroundColor: Colors.black },
    textWorkoutUnit: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._12px,
        marginEnd: 8,

        color: Colors.editTextHintColor
    },
    textWorkoutReps: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._11px,
        marginStart: 8,

        color: Colors.editTextHintColor
    },
    rowView: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 8,
        justifyContent: "space-between",

    },
    dateTextStyle: {
        fontSize: Fonts.size._16px,
        fontWeight: "500",
        alignSelf: "center",
        color: Colors.white,
        fontFamily: Fonts.name.regular,
    },

    textWorkoutType: {
        fontSize: Fonts.size._12px,
        fontWeight: "400",
        color: Colors.white,
        fontFamily: Fonts.name.regular
    },
})