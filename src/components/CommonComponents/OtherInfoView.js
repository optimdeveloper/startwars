
import React from 'react'
import { StyleSheet, View, FlatList } from "react-native";
import { hp, Fonts, Colors, wp, Strings } from "../../constants";
import SeperatorView from './SeperatorView'
import { MyText, CommonStyle } from '../common';

const OtherInfoView = ({ text }) => {
    return (
        <View style={styles.seperatorStyle}>
            <SeperatorView title={Strings.otherInfo} />
            <View style={styles.otherInfoViewStyle}>
                <MyText style={styles.infoValueStyle} text={text} />
            </View>
        </View>
    )
}

export default OtherInfoView


const styles = StyleSheet.create({

    seperatorStyle: {
        paddingTop: 20
    },
    flatListStyle: {
        paddingStart: 16,
        marginTop: 16
    },
    otherInfoViewStyle: {

        marginVertical: 16,
        marginHorizontal: 16,
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 6,

    },
    specStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        color: Colors.grayColor
    },
    infoValueStyle: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px,
        color: Colors.headerTitleColor,
    },
})