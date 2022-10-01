import React from 'react'
import { StatusBar, Text, View } from 'react-native'
import { Colors } from '../../constants'
import CommonStyle from '../common/CommonStyle'
import styles from '../home/styles'

export default function Header({title}) {
  return (
    <>
     <StatusBar
                translucent
                backgroundColor={Colors.black_real}
                barStyle="light-content"
            />

            <View
                style={[
                    CommonStyle.horizontalContainerStyleWithCenter,
                    CommonStyle.statusBarPadding,
                    {
                        paddingHorizontal: 18,
                        marginTop: 8,
                    },
                ]}
            >
             
                <View style={[styles.dropDownStyle]}>
                    <Text numberOfLines={1} style={styles.calenderTextStyle}>
                      {title}
                    </Text>
                </View>
                
            </View>
    </>
  )
}
