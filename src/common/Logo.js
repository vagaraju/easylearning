import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
   Image 
} from 'react-native';

import styles from '../components/Styles';

export default class Logo extends Component<{}> {
	render(){
		return(
				<View>
						<Image  style={{width:200, height: 80}}
										source={require('../images/study.jpg')}/>
          		<Text >Welcome to easyLearning</Text>	
  			</View>
			)
	}
}
