import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../../common/Styles';

export default class Settings extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Settings',
        tabBarIcon: () => (
            <Image source={require('../../images/settings.png')} 
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> Personal settings Info..</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Settings",() => Settings);