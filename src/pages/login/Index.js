import React, {Component} from 'react';
import {Modal, Text, TouchableHighlight, View, Alert} from 'react-native';
import { Button } from 'antd-mobile-rn';
export default class Login extends Component {
  state = {
    modalVisible: false,
  };

  componentDidMount() {
    Alert.alert('Modal has been closed.');
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: '30%'}}>
        <Button type="primary">111</Button>
      </View>
    );
  }
}