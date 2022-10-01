import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native'
import { Images, Colors, Fonts, Strings } from '../../constants'
import { CustomTextInput, CommonStyle, Clickable } from '../common'
import { navigate } from '../../navigation/RootNavigation'

const SearchBar = ({ placeholder, onChangeText, onPressSearch, editable, onPress, style }) => {
    return (
        <TouchableOpacity style={[styles.searchBarStyle, style]} disabled={onPress ? false : true} onPress={() => {

            if (onPress)
                onPress()
        }}>
            <Image style={styles.searchIconStyle} source={Images.ic_add_purple} />
            <TextInput onSubmitEditing={onPressSearch} returnKeyType={"search"}
                editable={editable} onChangeText={onChangeText} placeholder={placeholder || Strings.searchPlaceholder}
                placehldeTextInputStyle={styles.placehldeTextInputStyle} style={styles.textInputStyle} />
        </TouchableOpacity>
    )
}

export default SearchBar

const styles = StyleSheet.create({

    searchBarStyle: {
        ...CommonStyle.horizontalContainerStyleWithCenter,
        height: 40,
        borderRadius: 2,
        marginBottom: 16,
        paddingHorizontal: 14,
        paddingVertical: 12
    },
    searchIconStyle: {
        resizeMode: "contain",
        width: 15,
        height: 15,
        marginEnd: 12

    },
    textInputStyle: {
        flex: 1,
        height: 40,
        color: Colors.black,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._14px
    },
    placehldeTextInputStyle: {

        color: "#616161",
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._14px
    }
})