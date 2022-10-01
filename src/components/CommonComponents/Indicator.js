import React from 'react'
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
import { Fonts } from '../../constants';

export default function Indicator({text}) {
  return (
    <>
  <View style={[styles.container, styles.horizontal]}>
    <ActivityIndicator size="small" color="#0000ff" />
    <Text numberOfLines={1} style={styles.label}>
                        {text}
                    </Text>
  </View>
  </>
  )
}
const styles = StyleSheet.create({
    container: {
      backgroundColor:Colors.white,
      justifyContent:"center"
    },
    horizontal: {
      padding:10,
      flexDirection: "row",
    },
    label:{
     fontSize:Fonts.size._12px
    }
  });
  
