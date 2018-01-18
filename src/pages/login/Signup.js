import React, { Component } from 'react';
import {
  Text,
  View,
  StatusBar ,
  TouchableOpacity
} from 'react-native';
import {Actions} from 'react-native-router-flux';

import Logo from '../../common/Logo';
import Form from './Form';
import styles from '../../common/Styles';

export default class Signup extends Component<{}> {

  goBack() {
      Actions.pop();
  }
	guest() {
		Actions.dashBoard()
	}
	render() {
		return(
			<View style={styles.container}>
				<Logo/>
				<Form type="Signup"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Already have an account?</Text>
					<TouchableOpacity onPress={this.goBack}><Text style={styles.signupButton}> Sign in</Text></TouchableOpacity>
					<TouchableOpacity onPress={this.guest}><Text style={styles.signupButton}> / Guest</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}
