import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { MainContainer } from '../common'
import Webview from "react-native-webview"
export class AboutUs extends Component {
    render() {
        return (
            <MainContainer header={{ title: "About Us" }}>
                <Webview
                    source={{ uri: "http://18.117.222.207/about-us" }}
                />

            </MainContainer>
        )
    }
}

export default AboutUs
