import React, { Component } from 'react'
import { Text, Dimensions, StyleSheet, KeyboardAvoidingView } from 'react-native'
import Dialog, { DialogContent, DialogTitle, DialogFooter, DialogButton } from 'react-native-popup-dialog'
import { View } from 'native-base';
import { Colors, Fonts, wp } from '../../constants';


export default class AlertDialog extends Component {


  state = {

  }

  static dialogInstance
  static show(config) {


    this.dialogInstance.showDialog(config)

  }

  static hide() {


    this.dialogInstance.hideDialog()

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

  showDialog(config) {


    this.setState({
      visible: true,
      title: config.title,
      message: config.message,
      positiveButton: config.positiveButton,
      negativeButton: config.negativeButton,
      cancelable: config.cancelable || true,
      children: config.extraView
    })
  }

  render() {

    let { visible, onDismiss, children, cancelable, title, message, positiveButton, negativeButton, onTouchOutside } = { ...this.props, ...this.state }

    return (
      <KeyboardAvoidingView>
        <Dialog
          visible={visible || false}
          containerStyle={{ borderRadius: 4 }}
          dialogStyle={styles.dialog}
          onTouchOutside={() => {
            if (cancelable) {
              this.hideDialog()
            }
            if (onTouchOutside)
              onTouchOutside()
          }}
          onDismiss={onDismiss}
          footer={
            <DialogFooter>
              {negativeButton ? <DialogButton
                style={styles.btnStyle}
                text={negativeButton.title}
                bordered
                textStyle={styles.negativeTextStyle}
                onPress={negativeButton.onPress}
              /> : <View />}
              {positiveButton ? <DialogButton
                style={styles.btnStyle}
                bordered
                textStyle={styles.positiveTextStyle}
                text={positiveButton.title}
                onPress={() => {

                  positiveButton.onPress()
                }}
              /> : <View />}

            </DialogFooter>
          }
          dialogTitle={
            title ? <DialogTitle textStyle={styles.titleStyle}
              style={styles.titleContainerStyle}
              align='left' title={title}></DialogTitle> : undefined
          }
        >

          <DialogContent style={styles.dialogContent}>
            {message ? <Text style={styles.messageStyle}>{message}</Text> : null}
            {children}
          </DialogContent>
        </Dialog>
      </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create({

  modalBackground: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: "#90111111"
  },

  titleContainerStyle: {
    backgroundColor: Colors.black,
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomWidth: 0,
  },
  dialogContent: {
    backgroundColor: Colors.black, width: wp(80),
  },

  titleStyle: {
    backgroundColor: Colors.black,
    color: Colors.white,
    marginBottom: 8,
    fontFamily: Fonts.name.bold,
    fontSize: Fonts.size._22px,
  },
  messageStyle: {
    color: Colors.white,
    fontFamily: Fonts.name.regular,
    fontSize: Fonts.size._19px,
    lineHeight: 19
  },
  dialog: {
    backgroundColor: Colors.black,
    margin: 24,
    borderRadius: 3,
  },
  btnContainer: {

    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  btnStyle: {
    backgroundColor: Colors.black
  }
  , positiveTextStyle: {

    color: Colors.buttonColor,
    fontFamily: Fonts.name.medium,
    fontSize: Fonts.size._17px,
  },
  negativeTextStyle: {

    color: Colors.grayColor,
    fontFamily: Fonts.name.medium,
    fontSize: Fonts.size._17px,
  }

})