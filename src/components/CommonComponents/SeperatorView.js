import React from 'react'
import { View, StyleSheet } from 'react-native'
import { CommonStyle, ImageButton, MyText, TextButtonWithArrow } from '../common'
import { Fonts, Colors, Images } from '../../constants'

const SeperatorView = ({ title, showOption, onButtonClick, speratorTextColor, style }) => {
    return (
        <View style={[CommonStyle.horizontalContainerStyleWithCenter, styles.mainView, style]}>
            <MyText style={[styles.titleStyle, { color: speratorTextColor || Colors.white }]} text={title} />
            {!showOption ? null : <ImageButton source={Images.ic_dot_menu} onPress={onButtonClick} />}
        </View>
    )
}

export default SeperatorView

const styles = StyleSheet.create({

    mainView: {
        marginVertical: 16,

    },
    titleStyle: {
        flex: 1,
        fontSize: Fonts.size._16px,
        color: Colors.white,
        fontFamily: Fonts.name.bold
    }

})