/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar 
} from 'react-native';


import Routes from './src/Routes';
import firebase from 'firebase';
<StatusBar
translucent
backgroundColor="rgba(0, 0, 0, 0.24)"
animated
/>
export default class App extends Component<{}> {

  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBX_O_SzQLjN2ql-O7GlBAgBA6fmfUVC2w",
        authDomain: "easy-69639.firebaseapp.com",
        databaseURL: "https://easy-69639.firebaseio.com",
        projectId: "easy-69639",
        storageBucket: "easy-69639.appspot.com",
        messagingSenderId: "392550874481"
    });
}
  render() {
    return (
      <View style={styles.container}>
        <StatusBar
           backgroundColor="#1c313a"
           barStyle="light-content"
         />
        <Routes/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    flex: 1,
  }
});