import React, { Component } from 'react';
import {
  Text,
  View,
   Image 
} from 'react-native';

import styles from './Styles';
import * as Constants from './Constants';

export default class Logo extends Component<{}> {
	render(){
		return(
			<View>
				<Image source={Constants.LOGO_IMG_PATH} style = {styles.logoImg}/>
          		<Text >Welcome to easyLearning</Text>	
  			</View>
			)
	}
}
