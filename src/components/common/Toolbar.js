import React, { Component } from 'react'
import { Image, StatusBar, I18nManager } from 'react-native'
import { Header, Left, Right, Body, Icon, Text, Title } from 'native-base'
import Clickable from './Clickable';
import { Colors, Fonts, Images } from '../../constants';
import { goBack } from '../../navigation/RootNavigation';

class Toolbar extends Component {

    componentDidMount() {

        // StatusBar.setBarStyle('light-content')
    }

    render() {

        return (
            // <Header androidStatusBarColor={this.props.androidStatusBarColor || 'transparent'} {...this.props} style={{ backgroundColor: this.props.backgroundColor || Colors.darkBlue, justifyContent: 'center' }} >
            <Header onLayout={this.props.onLayout}
                translucent
                transparent androidStatusBarColor={this.props.androidStatusBarColor || this.props.backgroundColor || 'transparent'} style={{ backgroundColor: this.props.backgroundColor || Colors.backgroundColor, justifyContent: 'center', borderBottomWidth: 0, borderBottomColor: Colors.Backgroundgrey, ...this.props.style }}>
                <Left style={{ flex: 1 }}>{this._renderOption(this.props.noLeft ? undefined : this.props.left || {
                    image:
                        Images.ic_back, onPress: () => { goBack() }
                })}</Left>

                <Body style={{ flex: 3 }}>

                    {this._renderTitle()}

                </Body>
                <Right style={{ flex: 1 }}>
                    {this._renderRight()}
                </Right>
                <StatusBar
                    translucent={true} barStyle={'light-content'} />
            </Header >
        )
    }

    // <Left>{this._renderOption(this.props.left)}</Left>


    //     <Body >
    //     {this._renderTitle()}
    // </Body>
    // <Right>
    //                 {this._renderRight()}
    //             </Right>


    _renderTitle() {

        let { title, image, titleColor } = this.props;

        if (title) {
            return (<Title style={[{ color:Colors.white, alignSelf: 'center' }, styles.titleStyle]}>{title}</Title>)
        } else if (image) {
            return (<Image source={image} style={{ alignSelf: 'center', resizeMode: 'contain', tintColor: this.props.titleColor }}
            />)
        }
    }

    _renderOption(options) {

        if (options) {
            let { icon, image, text, onPress, color, imageStyle, view } = options;

            if (icon) {
                return (<Clickable borderLess onPress={onPress} style={styles.iconStyle}><Icon name={icon} style={{ color: color || Colors.Defaultblack }} /></Clickable>)
            } else if (image) {
                return (<Clickable borderLess onPress={onPress}>
                    <Image source={image}
                        style={{
                            marginHorizontal: 8,
                            resizeMode: "contain",
                            transform: [{ rotate: I18nManager.isRTL ? "180deg" : "0deg" }], ...imageStyle
                        }} /></Clickable>)
            } else if (text) {
                return (<Clickable borderLess style={styles.textContainerStyle} onPress={onPress}>
                    <Text style={{ ...styles.textStyle, color: color || Colors.Defaultwhite }}>{text}</Text>
                </Clickable>)
            } else if (view && view.render) {
                return view.render()
            }
        }
    }

    _renderRight() {

        if (this.props.right)
            return this.props.right.map(right => { return (this._renderOption(right)) })
    }
}

const styles = {

    textStyle: {
        marginHorizontal: 4,
        fontSize: Fonts.size._18px,
        color: Colors.headerTitleColor,
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: Fonts.name.bold
    },
    titleStyle: {
        fontSize: Fonts.size._20px,
        color: Colors.white,
        //fontWeight:"400",
        fontFamily: Fonts.name.bold
    },
    textContainerStyle: {


    },
    iconStyle: {
        marginHorizontal: 4,
        padding: 4,
    }
}

export default Toolbar
