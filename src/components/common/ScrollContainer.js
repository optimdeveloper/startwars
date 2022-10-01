import React, { Component } from 'react';
import { ScrollView, View } from 'react-native';
import CommonStyle from './CommonStyle';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { isNonScrolling, offsets, presets } from "./screen.presets"


export class ScrollContainer extends Component {
    componentDidMount = () => {
        
        if (this.props.onRef)
            this.props.onRef(this)

    }


    render() {
        const preset = presets.scroll
        const style = this.props.style || {}
        const backgroundStyle = this.props.backgroundColor ? { backgroundColor: this.props.backgroundColor } : {}
        return (
            <KeyboardAwareScrollView scrollEnabled={this.props.scrollEnabled || true}
                ref={(ref) => this.scrollView = ref} bounces={false}
                showsVerticalScrollIndicator={true}
                contentContainerStyle={{ flexGrow: 1 }}
                {...this.props}
            >
                <View style={CommonStyle.containerStyle}>
                <ScrollView
                        style={[preset.outer, backgroundStyle]}
                        contentContainerStyle={[preset.inner, style]}
                        keyboardShouldPersistTaps={this.props.keyboardShouldPersistTaps || "handled"}
                        >
                        {this.props.children}
                        </ScrollView>
                  
                </View>
            </KeyboardAwareScrollView>


        )
    }
}


export default ScrollContainer
