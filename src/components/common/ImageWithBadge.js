import React from 'react'
import { View, Text, Image } from 'react-native'
import Clickable from './Clickable'

const ImageWithBadge = ({ image, badge, onPress, color, right, left, imageStyle }) => {
    return (
        <Clickable disabled={!onPress} onPress={onPress}>


            <Image source={image} resizeMode={"contain"} style={{ marginHorizontal: 8, ...imageStyle }} />
            {
                badge != undefined ? <View style={{
                    width: 16, height: 16, borderRadius: 8,
                    position: "absolute", left: !left ? undefined : 0,
                    marginEnd: 4,
                    top: 0, right: right ? 0 : undefined,
                    justifyContent: 'center', alignItems: 'center',
                    backgroundColor: color || Colors.skyBlue
                }} >
                    <Text style={{ color: "white", alignSelf: 'center', fontSize: 8, }}>{badge}</Text>

                </View>
                    : null
            }
        </Clickable>
    )
}

export default ImageWithBadge
