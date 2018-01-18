import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../../components/Styles';
    
export default class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Home',
        tabBarIcon: () => (
            <Image source={require('../../images/home.png')} 
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> Home page for the project .</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Home",() => Home);
