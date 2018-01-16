import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity ,Keyboard
} from 'react-native';

import firebase from 'firebase';
import Spinner from './Spinner';
import styles from './Styles';

import { Actions } from 'react-native-router-flux';
import { TxtInput,TxtButton } from '../common/HtmlControls';


export default class Form extends Component<{}> {
  constructor(props){
    super(props);
    if (props.type === 'Login') {
      this.state = {loading: true, email :"vagarajug@gmail.com", password : "Vaga101g!",error: ""};
    } else {
      this.state = {loading: true, email :"", password : "",error: ""};
    }
   }
   static navigatorStyle = {
    tabBarHidden: true
};
   errorCall = (errMsg) => {
    Actions.error(errMsg);
   }
  onPress = () => {
    //this.renderButtonOrSpinner();
    console.log('Console statements for login process...');
    let pageType = this.props.type;
    let emailVal = this.state.email;
    let passwordVal = this.state.password;
    if(passwordVal.length < 6) {
      this.errorCall('password should be greater than 5 characters.');
    }
    if (pageType === 'Login') {
     firebase.auth().signInWithEmailAndPassword(emailVal, passwordVal)
      .then(() => {    Actions.dashBoard();
         this.setState({ error: '', loading: false }); })
      .catch(() => {
          console.log('login not successful.');
          this.setState({ error: 'Authentication failed...Please try agina!!', loading: false });
      });
    } else if (pageType === 'Signup') {
      firebase.auth().createUserWithEmailAndPassword(emailVal, passwordVal)
      .then(() => { Actions.dashBoard(); this.setState({ error: 'Contratulations...you are signed-up!!.', loading: false }); })
      .catch(() => {
          this.setState({ error: 'Failed to create details to db...', loading: false });
      });
    } 
   }
   renderButtonOrSpinner() {
   if (this.state.loading) {
        return <Spinner />;    
    }
   // return <Button onPress={this.onLoginPress.bind(this)} title="Log in" />; 
   }   
	render(){
		return(
			<View>
          <TxtInput   
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Email"
              placeholderTextColor = "#ffffff"
              selectionColor="#fff"
              keyboardType="email-address"
              value={this.state.email}
              onChangeText = {(text) => this.setState({email : text,})}
              onSubmitEditing={()=> this.password.focus()}
          />
          <TextInput style={styles.inputBox}
              underlineColorAndroid='rgba(0,0,0,0)' 
              placeholder="Password"
              secureTextEntry={true}
              placeholderTextColor = "#ffffff"
              value={this.state.password}
              onChangeText={(value) => this.setState({password: value})}
              ref={(input) => this.password = input}
              />  
           <TouchableOpacity style={styles.button} onPress={Keyboard.dismiss}  onPress={this.onPress}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
           <Text style={styles.errorTextStyle}> {this.state.error} </Text>
          {/* {this.renderButtonOrSpinner()} */}
  		</View>
			)
	}
}