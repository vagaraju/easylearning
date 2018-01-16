import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../components/Styles';

export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel : '',
        tabBarIcon: () => (
            <Image source={require('../images/contact.png')} 
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> easyLearning Inc.</Text>
                <Text style={styles.buttonText}> 1111 N 70th st Apt 101.</Text>
                <Text style={styles.buttonText}> Scottsdale , AZ.</Text>
                <Text style={styles.buttonText}> USA - 85251.</Text>
                <Text style={styles.buttonText}> Phone : (480) 765-1038</Text>
                <Text style={styles.buttonText}> ----------------------</Text>
                <Text style={[styles.buttonText]}> Email : vagarajug@gmail.com</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Contact",() => Contact);