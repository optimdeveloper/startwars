import React from 'react';
import {Colors, Fonts} from '../../constants';
import Clickable from './Clickable';
import MyText from './MyText';
import LinearGradient from 'react-native-linear-gradient';
import {Image, View} from 'react-native';


export default Button = ({
                             style,
                             onPress,
                             disabled,
                             bordered,
                             gradient,
                             icon,
                             rightIcon,
                             disableAllCaps = true,
                             title,
                             subtitle
                         }) => {
    const button = {
        backgroundColor: bordered ? "transparent" : disabled ? Colors.grayColor : Colors.buttonColor,
        height: 60,
        borderWidth: bordered ? 1 : 0,
        borderColor: bordered ? disabled ? Colors.grayColor : Colors.buttonColor : undefined,
        borderRadius: 14,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 20
    }
    const textStyle = {
        textAlign: "left",
        color: bordered ? Colors.buttonColor : Colors.white,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._18px,
        fontWeight: "bold",
    }

    const subStyle = {
        textAlign: "left",
        color: bordered ? Colors.buttonColor : Colors.white,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._12px,
    }
    const imageStyle = {
        marginHorizontal: 16,
    }

    return (

        <Clickable style={style} onPress={onPress} disabled={disabled}>
            <LinearGradient useAngle angle={45} start={{x: 1, y: 1}} end={{x: 1, y: 0}}
                            colors={bordered ? ["transparent", "transparent"] : gradient || [Colors.buttonColor, Colors.buttonColor2]}
                            style={[button, style]}>

                {icon ? <Image source={icon} style={{marginRight: 25}}/> : null}
                <View style={{width: 200}}>
                    <MyText style={textStyle} text={disableAllCaps ? title : title.toUpperCase()}/>
                    <MyText style={subStyle} text={subtitle}/>
                </View>
                {rightIcon ? <Image source={rightIcon} style={{marginLeft: 25}}/> : null}
            </LinearGradient>
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
