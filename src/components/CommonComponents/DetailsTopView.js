import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { MyCardView, TextButtonWithArrow, MyText, CommonStyle } from '../common'
import { Fonts, Colors } from '../../constants'

const DetailsTopView = ({ children, carName, date, price, totalBid, title1, title2, buttonText, onButtonClick }) => {
    return (
        <MyCardView style={[styles.mainView]}>
            {children ? <View style={styles.belowViewStyle}>{children}</View> : <View style={styles.belowViewStyle}>
                <View style={[CommonStyle.horizontalContainerStyleWithCenter, styles.carInfoContainer]}>
                    <MyText style={styles.carNameStyle} text={carName} />
                    <MyText style={styles.dateStyle} text={date} />
                </View>
                <View style={[CommonStyle.horizontalContainerStyleWithCenter, styles.bidInfoContainer]}>
                    <View style={styles.bidInfoStyle}>
                        <MyText style={styles.purchaseStyle} text={title1} />
                        <MyText style={styles.priceStyle} text={price} />
                    </View>
                    {title2 ? <View style={styles.bidInfoStyle}>
                        <MyText style={styles.purchaseStyle} text={title2} />
                        <MyText style={styles.priceStyle} text={totalBid} />
                    </View> : null}
                    <TextButtonWithArrow style={styles.btnStyle} title={buttonText} onPress={onButtonClick} />
                </View>
            </View>}
        </MyCardView>
    )
}

const styles = StyleSheet.create({

    mainView: {

        borderBottomLeftRadius: 36,
        borderBottomRightRadius: 36,
        backgroundColor: Colors.white,
    },
    belowViewStyle: {
        paddingTop: 8,
        paddingHorizontal: 24,
        paddingBottom: 30
    },
    bidInfoStyle: {

        flex: 1
    },
    btnStyle: {
        alignSelf: "flex-end",
        height: undefined
    }, bidInfoContainer: {

        paddingTop: 8,
        alignItems: "flex-end"
    },

    carInfoContainer: {
        alignItems: "flex-end"
    },
    purchaseStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        color: Colors.grayColor
    },
    priceStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._18px,
        color: Colors.headerTitleColor,
    },
    carNameStyle: {
        flex: 1,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._17px,
        color: Colors.black2
    },
    dateStyle: {
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._12px,
        color: Colors.gray2
    }

})
export default DetailsTopView
