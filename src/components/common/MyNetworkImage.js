import React, { useState } from 'react'
import { View, Text, ActivityIndicator } from 'react-native'
import FastImage from 'react-native-fast-image'
import { Colors } from '../../constants'

export default function MyNetworkImage({ style, source, resizeMode, loadingSize, containerStyle }) {

    const [loading, setLoading] = useState(false)
    return (
        <View style={[{ justifyContent: "center" }, containerStyle]}>
            <FastImage resizeMode={resizeMode} onLoadStart={() => setLoading(true)} onLoadEnd={() => setLoading(false)} source={source} style={style} />
            {!loading ? null : <ActivityIndicator size={loadingSize || "large"} color={Colors.buttonColor}
                style={{ position: "absolute", alignSelf: "center" }} />}
        </View>
    )
}
