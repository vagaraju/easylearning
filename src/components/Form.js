import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity 
} from 'react-native';

import firebase from 'firebase';
import Spinner from './Spinner';

import { Actions } from 'react-native-router-flux';
import { TxtInput,TxtButton } from '../common/HtmlControls';


export default class Form extends Component<{}> {
  constructor(props){
    super(props);
    this.state = {loading: true, email :"vagarajug@gmail.com", password : "Vaga101g!",error: ""};
   }
   errorCall = (errMsg) => {
    Actions.error(errMsg);
   }
  onPress = () => {
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
      .then(() => { this.setState({ error: 'Contratulations...you are signed-up!!.', loading: false }); })
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
			<View style={styles.container}>

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
           <TouchableOpacity style={styles.button}  onPress={this.onPress}>
             <Text style={styles.buttonText}>{this.props.type}</Text>
           </TouchableOpacity>     
           {this.renderButtonOrSpinner()}
  		</View>
			)
	}
}

const styles = StyleSheet.create({
  container : {
    flexGrow: 1,
    justifyContent:'center',
    alignItems: 'center'
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
  errorTextStyle: {
    color: '#E64A19',
    alignSelf: 'center',
    paddingTop: 10,
    paddingBottom: 10
}
});