import React, { useState } from "react";
import { createDrawerNavigator } from '@react-navigation/drawer';
import { FlatList, Image, Text } from 'react-native';
import { View } from 'react-native-animatable';
import { wp, Colors, Images } from '../../constants';
import HomeTabs from './TabNavigator';
import { AlertDialog, Clickable, CommonStyle, MyText } from "../common";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { loginApi } from "../login/LoginApi";
import AboutUs from "./AboutUs";
import Home from "./Home";


export default function DrawerHome() {
    return (
       <HomeTabs></HomeTabs>
    );
}

