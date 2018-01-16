import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';
import styles from './Styles';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View style={loginStyles.container}>
				<Image  style={{width:200, height: 80}}
          			source={require('../images/study.jpg')}/>
          		<Text style={styles.buttonText}>Welcome to easyLearning</Text>	
  			</View>
			)
	}
}

const loginStyles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'flex-end',
    alignItems: 'center'
  }
});