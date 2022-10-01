import React, { Component } from 'react';
import { ActivityIndicator, View, StyleSheet } from 'react-native';
import Dialog from 'react-native-popup-dialog';
import { Colors, wp } from '../../constants';

export default class ProgressDialog extends Component {

    state = {

    }

    static dialogInstance
    static show(config) {


        this.dialogInstance.showDialog(config)

    }

    static hide() {


        this.dialogInstance.hideDialog()

    }
    showDialog(config) {


        this.setState({
            visible: true,
            //   title: config.title,
            //   message: config.message,
            //   positiveButton: config.positiveButton,
            //   negativeButton: config.negativeButton,
            //   cancelable: config.cancelable,
            //   children: config.extraView
        })
    }
    hideDialog = () => {

        this.setState({
            visible: false
        })

    }
    componentDidMount() {
        if (this.props.onRef != null) {
            this.props.onRef(this)
        }
    }

    render() {
        return (
            <Dialog
                dialogStyle={styles.styleDialogContent}
                footer={null}
                visible={this.state.visible || false}>

                <View style={styles.activityIndicatorWrapper}>
                    <ActivityIndicator
                        style={{ alignSelf: 'center' }}
                        size='large' color={Colors.buttonColor} />
                </View>
            </Dialog>
        )
    }
}




const styles = StyleSheet.create({
    styleDialogContent: {
        padding: 10,
        backgroundColor: Colors.gray2,
        width: 80,
        height: 80,
        borderRadius: 40,
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'center',
    },
    activityIndicatorWrapper: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

