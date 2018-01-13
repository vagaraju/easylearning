import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    StatusBar,
    TouchableOpacity
} from 'react-native';

import { Actions } from 'react-native-router-flux';
import { TxtInput,TxtButton } from '../common/HtmlControls';

export default class Profile extends Component<{}> {
    constructor(){
        super();
        this.state = {loading: true, email :"vagarajug@gmail.com", password : "",error: ""};
       }
    goBack() {
        Actions.pop();
    }

    render() {
        return (
            <View style={styles.container}>  
                <TxtInput   
                    underlineColorAndroid='rgba(0,0,0,0)' 
                    placeholder="Email"
                    placeholderTextColor = "#ffffff"
                    selectionColor="#fff"
                    keyboardType="email-address"
                    value={this.state.email}
                    onChangeText = {(text) => this.setState({email : text,})}
                />
                <Text style={styles.signupTextCont}> Congratulations !!!!!!
                             Your login is successful and This is profile page.
                </Text>
               
                <TouchableOpacity style={styles.button}  onPress={this.onPress}>
                     <TxtButton placeholder="Email">{this.state.email}</TxtButton>
                 </TouchableOpacity>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
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
      }
});
