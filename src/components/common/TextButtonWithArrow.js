import React from 'react';

import { Colors, Fonts, Images } from '../../constants';
import { Image } from 'react-native';
import Clickable from './Clickable';
import MyText from './MyText';


export default TextButtonWithArrow = ({ style, onPress, disableAllCaps = true, title }) => {
    const button = {
        backgroundColor: "transparent",
        height: 43,
        alignItems: "center",
        flexDirection: "row",

    }
    const textStyle = {
        textAlign: "center",
        color: Colors.textButtonColor,
        fontWeight: "500",
        fontFamily: Fonts.name.bold,
        fontSize: Fonts.size._18px,

        flex: 1

    }

    const imageStyle = {
        marginHorizontal: 8,
    }


    return (

        <Clickable onPress={onPress} style={[button, style]}>

            <MyText style={textStyle} text={disableAllCaps ? title : title.toUpperCase()} />

            {/* <Image style={imageStyle} source={Images.rightArrow} /> */}

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