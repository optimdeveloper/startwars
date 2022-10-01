import { Container } from 'native-base';
import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './Toolbar';
import { Colors } from '../../constants';

class MainContainer
    extends Component {
    render() {
        return (
            <Container style={{ flex: 1, backgroundColor: Colors.white }}  {...this.props}>
                {this.props.header ? <Toolbar {...this.props.header} /> : null}
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </Container>
        )
    }
}

export default MainContainer

