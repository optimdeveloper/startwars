import React from 'react';

import { Button as NativeButton, Body, Text, Right, Left, View } from 'native-base';
import { Colors, Fonts, Images } from '../../constants';
import { Image } from 'react-native';
import Clickable from './Clickable';
import MyText from './MyText';


export default ButtonWithArrow = ({ style, onPress, disabled, bordered, rightImage, disableAllCaps, title }) => {
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.grayColor : Colors.buttonColor,
        height: 43,
        borderWidth: 1,
        borderColor: bordered ? Colors.buttonColor : undefined,
        borderRadius: 3,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",

    }
    const textStyle = {
        textAlign: "center",
        color: bordered ? Colors.headerTitleColor : Colors.white,
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._13px,
        marginHorizontal: 16,

    }

    const imageStyle = {
        marginHorizontal: 16,
    }


    return (

        <Clickable onPress={onPress} style={[button, style]}>

            <MyText style={textStyle} text={disableAllCaps ? title : title.toUpperCase()} />

            <Image style={imageStyle} source={rightImage || Images.rightArrow} />

        </Clickable>
        // <NativeButton bordered={bordered} disabled={disabled} onPress={onPress} style={{ ...button, ...style, ...{ elevation: 0 } }}>
        //     <Left>
        //         <Image source={Images.rightArrow} />
        //     </Left>
        //     <Body >
        //         <Text style={textStyle}>{disableAllCaps ? title : title.toUpperCase()}</Text>
        //     </Body>
        //     <Right>
        //         <Image source={Images.rightArrow} />
        //     </Right>
        // </NativeButton>
    );



}