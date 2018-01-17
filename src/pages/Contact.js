import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../components/Styles';
import address from '../common/Constants';

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
                <Text style={styles.buttonText}> {address.companyName}</Text>
                <Text style={styles.buttonText}> {address.address1}</Text>
                <Text style={styles.buttonText}>{address.address2}</Text>
                <Text style={styles.buttonText}>{address.country}</Text>
                <Text style={styles.buttonText}> Phone : {address.phone}</Text>
                <Text style={styles.buttonText}> fax : {address.fax}</Text>
                <Text style={styles.buttonText}> ----------------------</Text>
                <Text style={[styles.buttonText]}> Email : vagarajug@gmail.com</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Contact",() => Contact);