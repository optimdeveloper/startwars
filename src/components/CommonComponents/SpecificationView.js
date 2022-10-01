
import React from 'react'
import { StyleSheet, View, FlatList } from "react-native";
import { hp, Fonts, Colors, wp } from "../../constants";
import SeperatorView from './SeperatorView'
import { MyText, CommonStyle } from '../common';

const SpecificationView = () => {
    return (
        <View style={styles.seperatorStyle}>
            <SeperatorView title={"Specifications"} />
            <FlatList
                horizontal
                style={styles.flatListStyle}
                showsHorizontalScrollIndicator={false}
                data={[{ label: "Color", value: "White" }, { label: "Gearbox", value: "Automatic" }, { label: "Seat", value: "4" }]}
                renderItem={({ item, index }) => {

                    return (
                        <View style={styles.specViewStyle}>
                            <MyText style={styles.specStyle} text={item.label} />
                            <MyText style={styles.specValueStyle} text={item.value} />

                        </View>
                    )
                }}
            />
        </View>
    )
}

export default SpecificationView


const styles = StyleSheet.create({

    seperatorStyle: {
        paddingTop: 20
    },
    flatListStyle: {
        paddingStart: 16,
        marginTop: 16
    },
    specViewStyle: {
        width: wp(38),
        backgroundColor: Colors.white,
        padding: 20,
        borderRadius: 6,
        marginEnd: 10,
    },
    specStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        color: Colors.grayColor
    },
    specValueStyle: {
        marginTop: 8,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._18px,
        color: Colors.headerTitleColor,
    },
})