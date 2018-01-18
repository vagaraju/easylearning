import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../../components/Styles';
import {ADDRESS} from '../../common/Constants';

export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel : '',
        tabBarIcon: () => (
            <Image source={require('../../images/contact.png')} 
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> {ADDRESS.companyName}</Text>
                <Text style={styles.buttonText}> {ADDRESS.address1}</Text>
                <Text style={styles.buttonText}>{ADDRESS.address2}</Text>
                <Text style={styles.buttonText}>{ADDRESS.country}</Text>
                <Text style={styles.buttonText}> Phone : {ADDRESS.phone}</Text>
                <Text style={styles.buttonText}> fax : {ADDRESS.fax}</Text>
                <Text style={styles.buttonText}> ----------------------</Text>
                <Text style={[styles.buttonText]}> Email : vagarajug@gmail.com</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Contact",() => Contact);