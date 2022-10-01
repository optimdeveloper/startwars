import { StyleSheet } from "react-native"
import { Colors, Fonts, wp } from "../../constants"
import { getStatusBarHeight } from 'react-native-status-bar-height';

export default StyleSheet.create({

    containerStyle: {
        flex: 1,
    },
    containerStyleWithCenter: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    containerStyleWithHorizontalCenter: {
        alignItems: "center",
    },
    containerStyleWithVerticalCenter: {
    },
    horizontalContainerStyle: {

        flexDirection: "row"

    },
    avatarStyle: {

        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: Colors.gray2,

    },
    avatarSmallStyle: {

        width: 30,
        height: 30,
        borderRadius: 15,
        backgroundColor: Colors.gray2,

    },
    CardStyle: {

        elevation: 5,
        shadowColor: Colors.grayColor,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
    },
    backgroundStyle: {
        backgroundColor: Colors.black
    },
    horizontalContainerStyleWithCenter: {

        flexDirection: "row",
        alignItems: "center",
        backgroundColor:Colors.black_real

    },
    commonTextTitleStyle: {

        color: Colors.white,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._28px
    },
    commonTextSubTitleStyle: {

        color: Colors.white,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._18px
    },
    rightPaddedStyle: {

        paddingStart: wp(16),
    },
    statusBarPadding: {

        paddingTop: getStatusBarHeight(),
    }
})