import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../../common/Styles';
import * as Constants from '../../common/Constants';


export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel : '',
        tabBarIcon: () => (
            <Image source={Constants.IMAGE_PATHS.CONTACT_IMG_PATH}
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> {Constants.ADDRESS.companyName}</Text>
                <Text style={styles.buttonText}> {Constants.ADDRESS.address1}</Text>
                <Text style={styles.buttonText}>{Constants.ADDRESS.address2}</Text>
                <Text style={styles.buttonText}>{Constants.ADDRESS.country}</Text>
                <Text style={styles.buttonText}> Phone : {Constants.ADDRESS.phone}</Text>
                <Text style={styles.buttonText}> fax : {Constants.ADDRESS.fax}</Text>
                <Text style={styles.buttonText}> ----------------------</Text>
                <Text style={[styles.buttonText]}> Email : vagarajug@gmail.com</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Contact",() => Contact);