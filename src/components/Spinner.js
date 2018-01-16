import React, { Component } from 'react';
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';


export default class Spinner extends Component {
    render() {
      return (
        <View style={[styles.container]}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      )
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      //  flexGrow: 1,
        justifyContent:'center',
        alignItems: 'flex-end'
    }
  })
  
