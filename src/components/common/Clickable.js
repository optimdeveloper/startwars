import React, { Component } from 'react';
import { TouchableOpacity} from 'react-native'


class Clickable extends Component {
    render() {
        const { children, borderLess, rippleColor, style, activeOpacity, disabled, } = this.props
        return (
            <TouchableOpacity disabled={false} activeOpacity={activeOpacity || 0.5} style={style}
                onPress={this.onPress}>
                {children}
            </TouchableOpacity>
            
        );
    }

    onPress = () => {
        requestAnimationFrame(() => {
            if (this.props.onPress)
                this.props.onPress()
        })
    }
}

export default Clickable

