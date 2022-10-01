import {Container} from 'native-base';
import React, {Component} from 'react';
import {View} from 'react-native';
import Toolbar from './Toolbar';
import {Colors} from '../../constants';
import {BannerAd, BannerAdSize, TestIds} from "@react-native-firebase/admob";
import {getBoolean} from "../../core/data/PrefUtils";
import {FREE_VERSION} from "../../core/data/PrefKeys";

class MainAdContainer extends Component {
    render() {
        const free = getBoolean(FREE_VERSION)
        
        return (
            <Container style={{flex: 1, backgroundColor: Colors.white}}  {...this.props}>
                {this.props.header ? <Toolbar {...this.props.header} /> : null}
                <View style={{flex: 1}}>
                    {this.props.children}
                </View>
                
                  
                

            </Container>
        )
    }
}

export default MainAdContainer

