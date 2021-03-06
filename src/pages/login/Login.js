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

export default class Login extends Component<{}> {

	signup() {
		Actions.signup()
	}
	guest() {
		Actions.dashBoard()
	}

	render() {
		return(
			<View style={styles.container}>
				<Logo />
				<Form type="Login"/>
				<View style={styles.signupTextCont}>
					<Text style={styles.signupText}>Don't have an account yet?</Text>
					<TouchableOpacity onPress={this.signup}><Text style={styles.signupButton}> Signup</Text></TouchableOpacity>
					<TouchableOpacity onPress={this.guest}><Text style={styles.signupButton}> / Guest</Text></TouchableOpacity>
				</View>
			</View>	
			)
	}
}