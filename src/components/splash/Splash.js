
import React, { useEffect } from 'react'
import { Image, ImageBackground, StatusBar } from 'react-native'
import { Images } from '../../constants'
import { CommonStyle } from '../common'

const Splash = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home")
           }, 2000)
    }, [])

    return (
        <ImageBackground style={CommonStyle.containerStyleWithCenter} imageStyle={{ resizeMode: "stretch" }} source={Images.splashBg}>
            <StatusBar translucent barStyle="light-content" />
            <Image source={Images.splashLogo} />
        </ImageBackground>
    )
}

export default Splash

