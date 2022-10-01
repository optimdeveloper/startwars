import React, { Component } from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'
import { store } from '../../App'
import { Colors, Fonts, Images } from '../../constants'
import { KEY_USER_DATA } from '../../core/data/PrefKeys'
import { goBack, push } from '../../navigation/RootNavigation'
import { ButtonWithGradient, ItemCounter, MainContainer, ProgressDialog, ScrollContainer } from '../common'
import { registerApi } from '../register/RegisterApi'

export default function Measurement({ navigation, session, route }) {

  //  user = store.getState().session[KEY_USER_DATA] || {}
     const user=route?.params?.data || ''
     console.log('data',user)
        return (
            <MainContainer header={{ title: user.name, noRight:true }}>
                <ScrollContainer>
                <View style={styles.container}>
                        
                <Text style={styles.labelT}>General Information</Text>
                        
               </View>  
               <View style={styles.containerB}>
                  <View style={styles.viewTop}>
                            <Text style={styles.labelT}>Eye Color</Text>
                        </View>
          
                        <View style={styles.viewL}>
                        <Text style={styles.labelT}>{user.eye_color}</Text>
                        </View>  
                                
                       </View>

                 <View style={styles.containerB}>
                  <View style={styles.viewTop}>
                            <Text style={styles.labelT}>Hair Color</Text>
                        </View>
          
                        <View style={styles.viewL}>
                        <Text style={styles.labelT}>{user.hair_color}</Text>
                        </View>  
                                
                       </View>
                       <View style={styles.containerB}>
                  <View style={styles.viewTop}>
                            <Text style={styles.labelT}>Skin Color</Text>
                        </View>
          
                        <View style={styles.viewL}>
                        <Text style={styles.labelT}>{user.skin_color}</Text>
                        </View>  
                                
                       </View>
                       <View style={styles.containerB}>
                  <View style={styles.viewTop}>
                            <Text style={styles.labelT}>Birth Year</Text>
                        </View>
          
                        <View style={styles.viewL}>
                        <Text style={styles.labelT}>{user.birth_year}</Text>
                        </View>  
                                
                       </View>
                       <View style={styles.container}>
                        
                        <Text style={styles.labelT}>Vehicles</Text>
                                
                       </View> 
                       {user.vehicles.map(item=>
                        
                        <View style={styles.containerB}>
                 
                        <Text style={styles.labelV}>{item}</Text>
                            
                       </View>
                        
                        )}
                </ScrollContainer>
    
            </MainContainer>
        )
    
}


const styles = StyleSheet.create({

 
        touch: {
          flexDirection: "row",
          flex: 3,
        },
        containerTop: {
          flex: 1,
        },
        container: {
          flex: 1,
          marginLeft: 15,
          marginRight: 5,
          marginTop: 15,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom:20
        },
        containerB: {
            flex: 1,
            marginLeft: 15,
            marginRight: 5,
            marginTop: 15,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            borderBottomWidth:1,
            borderBottomColor:Colors.grayColor,
            paddingBottom:20
          },
        label: {
          fontSize: Fonts.size._12px,
        },
        labelV: {
          fontSize: Fonts.size._14px,
          color:Colors.gray2,
        
        },
        viewTop: {
          flex: 3,
          flexDirection: "row",
          alignItems: "center",
        },
        viewF: {
          flexDirection: "column",
          alignItems: "flex-start",
        },
        labelT: {
          color: Colors.black_real,
          fontWeight: "bold",
          fontSize: Fonts.size._14px,
        },
        labelB: {
          color: Colors.grayColor,
          fontSize: Fonts.size._12px,
          fontWeight:"800"
        },
        viewL: {
          flex: 1,
          alignItems: "flex-end",
          marginBottom: 15,
          marginRight:15
        },
      

})
