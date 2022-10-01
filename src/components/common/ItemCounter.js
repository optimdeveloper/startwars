import React, { useCallback, useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { AlertDialog, CustomTextInput } from '.'
import { Colors, Fonts, Images } from '../../constants'
import ImageButton from './ImageButton'

const ItemCounter = ({ value, title, onValueChange, unit }) => {

    const [count, setCount] = useState(value || "0")
    const [textCount, setTextCount] = useState("")
    const [dialog, showDialog] = useState(false)

    const plusCount = useCallback(
        () => {

            const finalCount = parseFloat(count) + 1
            setCount(finalCount.toString())
        },
        [count],
    )

    const minusCount = useCallback(
        () => {

            const intCount = parseFloat(count)
            const finalCount = intCount > 0 ? intCount - 1 : 0
            setCount(finalCount.toString())
        },
        [count],
    )

    useEffect(() => {
        if (onValueChange)
            onValueChange(count)
        return () => {

        }
    }, [count])

    return (
        <View style={styles.top}>
            {title ? <Text style={styles.title}>{title}</Text> : null}

            <View style={styles.main}>
                <ImageButton style={{ width: 30, height: 30 }} onPress={plusCount} source={Images.ic_add_new} />
                <Text onPress={() => showDialog(true)} style={styles.text}>{count} {unit || ""}</Text>
                <ImageButton style={{ width: 30, height: 30 }} onPress={minusCount} source={Images.ic_minus} />
            </View>

            <AlertDialog
                visible={dialog}
                title={title || "Set Value"}
                cancelable
                positiveButton={{
                    title: "Done",
                    onPress: () => {
                        showDialog(false)
                        setCount(textCount)
                    }
                }}
                negativeButton={{
                    title: "Cancel",
                    onPress: () => {
                        showDialog(false)
                        setTextCount("")

                    }
                }}
            >

                <CustomTextInput autoFocus onSubmitEditing={() => {
                    showDialog(false)
                    setCount(textCount)

                }} disabledFloating maxLength={10} inputType={"numeric"} value={textCount.toString()} onChangeText={(text) => {

                    let val = text.replace(/[^0-9\.]/g, '');
                    if (val.split('.').length > 2)
                        val = val.replace(/\.+$/, "");
                    setTextCount(val.toString())
                }} />

            </AlertDialog>
        </View>
    )
}

export default ItemCounter

const styles = StyleSheet.create({
    top: {

    },
    main: {
        flexDirection: "row",
        borderColor: "#FFFFFF15",
        borderWidth: 1,
        padding: 2,
        alignItems: "center",
        justifyContent: "space-between",
        borderRadius: 10
    },
    text: {
        color: Colors.white,
        fontSize: Fonts.size._18px,
        fontFamily: Fonts.name.regular
    },
    title: {
        marginBottom: 8,
        color: Colors.editTextHintColor,
        fontSize: Fonts.size._16px,
        fontFamily: Fonts.name.regular
    }
})
