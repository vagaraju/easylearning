import React, { Component } from 'react';
import {AppRegistry,StyleSheet} from 'react-native';

const containerBgColor = "gray";//'#455a64';
const btnBgColor = 'white';//#1c313a';
const fontTxtColor = "black"//'#ffffff';
const tabImgColor = "black"//'#ffffff';
const tabImgTintColor = "black"//'#ffffff';
export const txtBoxBgColor = "#ffffff"//'#ffffff';

export const TabNavigatorConfig = {
  tabBarPosition: 'bottom',
  animationEnabled: true,
  tabBarOptions: {
      style: {
          backgroundColor:  containerBgColor,
        },
        tabStyle: {
          width: 100,    
        },
        labelStyle: {
          fontSize: 10,
          color:fontTxtColor,
        },
        
      activeTintColor: tabImgTintColor,
      showIcon: true,
  }
};

const styles = StyleSheet.create({
  container : {
      backgroundColor: containerBgColor,
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  button: {
    width:300,
    backgroundColor:btnBgColor,
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:fontTxtColor,
    textAlign:'center'
  },
  tabImageColor:{
    width: 30, 
    height: 30 , 
    tintColor: tabImgColor
  },
  signupTextCont : {
    alignItems:'center',
    justifyContent :'center',
    paddingVertical:16,
    flexDirection:'row'
  },
  signupText: {
  	color:fontTxtColor,
  	fontSize:16
  },
  signupButton: {
  	color:fontTxtColor,
  	fontSize:16,
  	fontWeight:'500'
  },
  inputBox: {
    width:300,
    backgroundColor:txtBoxBgColor,//'rgba(255, 255,255,0.2)',
    borderRadius: 25,
    paddingHorizontal:16,
    fontSize:16,
    color:fontTxtColor,
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
export const errorstyles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    width:150,
    backgroundColor:btnBgColor,
     borderRadius: 25,
      marginVertical: 10,
      paddingVertical: 13
  },
  buttonText: {
    fontSize:16,
    fontWeight:'500',
    color:fontTxtColor,
    textAlign:'center'
  }
});

module.exports = styles
module.exports.TabNavigatorConfig =TabNavigatorConfig;