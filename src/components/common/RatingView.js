import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { CommonStyle } from '.'

const RatingView = ({ style, maxRating = 5, starImage, onRating, unSelectedStarImage, startSize = 40 }) => {

    const [index, setIndex] = useState(-1)

    const updateRating = (index) => {

        setIndex(index)
        if (onRating)
            onRating(index + 1)
    }

    let React_Native_Rating_Bar = [];
    //Array to hold the filled or empty Stars
    for (let i = 1; i <= 5; i++) {
        React_Native_Rating_Bar.push(
            <TouchableOpacity
                activeOpacity={0.7}
                key={i}
                style={{ marginEnd: 4 }}
                onPress={() => {
                    updateRating(i)
                }}>
                <Image
                    style={{
                        width: startSize,
                        height: startSize,
                        resizeMode: 'contain',
                    }}
                    source={
                        i <= index
                            ? starImage
                            : unSelectedStarImage
                    }
                />
            </TouchableOpacity>
        );
    }

    return (
        <View style={[CommonStyle.horizontalContainerStyleWithCenter, style]}>
            {React_Native_Rating_Bar}
        </View>
    )
}

export default RatingView
