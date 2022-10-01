import _ from "lodash";
import React, { Component } from 'react';
import { I18nManager, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Colors, Fonts } from '../../constants';
import Clickable from "./Clickable";
import ImageButton from "./ImageButton";
import CountryPicker, { DARK_THEME } from 'react-native-country-picker-modal'
import { store } from "../../App";
import { setSessionField } from "../../actions/SessionActions";


export default class CustomTextInput extends Component {
    session = store.getState().session

    state = {
        isFocused: false,
        underlineColor: Colors.editTextUnderlineColor,
        text: '',
        countryPicker: false,
        country: this.session.country

    };

    measureView(event) {
        const e = event.persist()

        this.setState({
            x: event.nativeEvent.layout.x,
            y: event.nativeEvent.layout.y,
            width: event.nativeEvent.layout.width,
            height: event.nativeEvent.layout.height
        })
    }

    handleFocus = () => this.setState({ isFocused: true, underlineColor: Colors.white });
    handleBlur = () => this.setState({ isFocused: false, underlineColor: Colors.editTextUnderlineColor });
    render() {
        // console.log("session.country", this.session.country)
        let {
            label, value, onChangeText, style, password, fontSize, leftIcon, textAlign, inputType, textColor, editable, rightText, rightTextStyle,
            rightIcon, leftText, leftTextStyle, onLeftClick, maxLength,
            leftIconStyle, onClickCountry, multiline, rightIconStyle, minHeight, onPress, onRightClick, country, hasCountry, disabledFloating, error, autoFocus, onSubmitEditing
        } = this.props
        let { isFocused, text } = this.state;
        disabledFloating = disabledFloating == undefined ? true : disabledFloating

        isFocused = isFocused || text.length > 0 || value && value.length > 0
        const labelStyle = {
            position: 'absolute',
            marginTop: hasCountry && !isFocused ? 4 : 0,
            left: hasCountry ? this.state.width : 0,
            fontFamily: Fonts.name.regular,
            top: -4,
            fontWeight: "400",
            fontSize: 16,
            color: _.isEmpty(this.props.error) ? Colors.editTextHintColor : Colors.errorColor,
        };

        const errorLabelStyle = {
            marginTop: 8,
            fontFamily: Fonts.name.regular,
            fontSize: 14,
            color: Colors.errorColor,
        };
        const textAlignFinal = textAlign ? textAlign : I18nManager.isRTL ? "right" : "left"
        return (
            <View style={{
                paddingTop: isFocused && !disabledFloating ? 24 : 16, marginTop: isFocused && !disabledFloating ? 16 : 0
            }}>


                {isFocused && !disabledFloating ? <Text style={labelStyle}>
                    {label}
                </Text> : null}
                <View style={{
                    borderWidth: this.state.isFocused ? 2 : 1,
                    alignItems: 'center',
                    borderRadius: 10,
                    paddingHorizontal: 16,

                    borderColor: _.isEmpty(this.props.error) ? this.state.underlineColor : Colors.redbtn, ...style,
                }}>

                    <View activeOpacity={0} style={{
                        flexDirection: 'row', alignItems: 'center'
                    }}>
                        {hasCountry ?
                            <View onLayout={(event) => this.measureView(event)}>
                                <Clickable disabled={editable == false} onPress={() => {

                                    this.setState({ countryPicker: true })
                                    if (onClickCountry)
                                        onClickCountry
                                }} style={styles.countryView}>
                                    {/* <Image source={country.flag ? country.flag : DEFAULT_FLAG} style={styles.CountryImg} /> */}
                                    <Text style={styles.Countrytext}>{`+${this.state.country?.callingCode?.length ? this.state.country?.callingCode[0] : 1}`}</Text>
                                </Clickable>
                            </View> : null}

                        {leftIcon ? <ImageButton onPress={onLeftClick} source={leftIcon}
                            style={[{ marginHorizontal: 13 }, leftIconStyle]} resizeMode={'contain'} /> : null}
                        {leftText ? <Text onPress={onLeftClick} style={[{ marginHorizontal: 8, textAlignVertical: "center", color: "white" }, leftTextStyle]} >{rightText}</Text> : null}

                        {editable == undefined || editable == true ? <TextInput
                            autoCapitalize="none"
                            value={value}
                            placeholderTextColor={_.isEmpty(this.props.error) ? Colors.editTextHintColor : Colors.redbtn}
                            placeholder={!isFocused ? label : undefined
                            }
                            multiline={multiline}
                            autoFocus={autoFocus}
                            maxLength={maxLength}
                            selectTextOnFocus={editable}
                            keyboardType={inputType}
                            onChangeText={(text) => {
                                this.setState({ text: text, error: '' })
                                if (onChangeText)
                                    onChangeText(text)
                            }}
                            secureTextEntry={password}
                            style={[styles.textInputStyle, {
                                height: minHeight, fontSize: fontSize || 17,
                                color: textColor || Colors.editTextTextColor,
                                textAlign: textAlignFinal,
                            }]}
                            onFocus={this.handleFocus}
                            onSubmitEditing={onSubmitEditing}
                            selectionColor={_.isEmpty(this.props.error) ? Colors.textPrimaryColor : Colors.redbtn}
                            onBlur={this.handleBlur}
                        /> :

                            <Text style={[styles.textInputStyle, {
                                fontSize: fontSize || 17,
                                color: _.isEmpty(value) ? Colors.editTextHintColor : textColor || Colors.editTextTextColor,
                                textAlign: textAlignFinal,

                            }]}
                                onPress={onPress}>
                                {_.isEmpty(value) ? label : value}
                            </Text>
                        }

                        {rightIcon ? <ImageButton style={[{ marginEnd: 12 }, rightIconStyle]} onPress={onRightClick} source={rightIcon}
                            resizeMode={'contain'} /> : null}
                        {rightText ? <Text onPress={onRightClick} style={[{ marginHorizontal: 8, textAlignVertical: "center", color: Colors.editTextHintColor }, rightTextStyle]} >{rightText}</Text> : null}

                    </View>


                </View>
                {!_.isEmpty(error) ? <Text style={errorLabelStyle}>
                    {error}
                </Text> : null}

                {this.state.countryPicker ? <CountryPicker
                    onSelect={(country) => {
                        this.setState({ countryPicker: false, country })

                        console.log("country", country)
                        store.dispatch(setSessionField("country", country))
                    }}

                    onClose={() => {

                        this.setState({ countryPicker: false })
                    }}

                    theme={DARK_THEME}
                    withCallingCode
                    withFilter
                    withAlphaFilter
                    withCountryNameButton={false}
                    withFlag
                    withModal
                    visible={true}
                /> : null}
            </View>
        );
    }
}

const styles = StyleSheet.create({

    coontainerStyle: {
        flexDirection: 'row',
        margin: 8,
        backgroundColor: 'white',
        height: 50
    },
    textInputStyle: {
        paddingVertical: 4, paddingStart: 0, flex: 1,
        fontFamily: Fonts.name.regular, borderBottomWidth: 0,
        paddingVertical: 12,
        textAlign: "left",
    },
    errorStyle: {
        marginTop: 8,
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._12px,
        color: Colors.errorColor,
        textAlign: 'left'
    },
    countryView: {
        alignItems: 'center',
        flexDirection: 'row',
        height: 40,
    },
    CountryImg: {
        alignItems: 'center',
        width: 32,
        height: 32,
        // alignSelf: 'center',
        //marginTop:10
    },
    Countrytext: {
        fontFamily: Fonts.name.regular,
        fontSize: Fonts.size._17px,
        marginRight: 16,
        color: Colors.editTextTextColor,
        //  alignSelf: 'center',
    },
    SperatorLine: {
        width: 2,
        height: 24,
        backgroundColor: Colors.grayColor,
        alignSelf: 'center',
        marginLeft: 6,
    },
})


