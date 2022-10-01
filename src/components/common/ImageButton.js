import React from 'react';
import { Image, TouchableOpacity } from 'react-native'

const ImageButton = ({ source, style, onPress, onLongPress, containerStyle }) => {

    return (<TouchableOpacity onLongPress={onLongPress} onPress={onPress} style={containerStyle} >

        <Image style={[styles.actionStyle, style]} source={source} />

    </TouchableOpacity>);
}

const styles = {


    actionStyle: {

    },


}

export default ImageButton;