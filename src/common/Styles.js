import React, { Component } from 'react';
import {AppRegistry,StyleSheet} from 'react-native';

const constants = {
  containerBgColor: '#455a64'
};

const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
      style: {
          backgroundColor:  constants.containerBgColor,
        },
        tabStyle: {
          width: 100,    
        },
        labelStyle: {
          fontSize: 10,
        },
      activeTintColor: '#ffffff',
      showIcon: true,
  }
};

const styles = StyleSheet.create({
  container : {
      backgroundColor: '#455a64',
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  button: {
    width:300,
    backgroundColor:'#1c313a',
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:'#ffffff',
    textAlign:'center'
  },
  tabImageColor:
  {width: 30, height: 30 , tintColor: 'white'},
  signupTextCont : {
    alignItems:'center',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:'rgba(255,255,255,0.6)',
  	fontSize:16
  },
  signupButton: {
  	color:'#ffffff',
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:300,
    backgroundColor:'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:'#ffffff',
    marginVertical: 10
  }, 
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
},
  logoImg:{ 
    width: 200, 
    height: 80 
}
});
module.exports = styles
module.exports.constants = constants;
module.exports.TabNavigatorConfig =TabNavigatorConfig;