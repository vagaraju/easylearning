import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,AppRegistry} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Contact from './Contact';
import Home from './Home';
import Settings from './Settings';
import Map from './Map';

const NavigateTabs = TabNavigator({
    Home: { screen: Home },
    Map: { screen: Map },
    Settings: { screen: Settings },
    Contact: { screen: Contact }
    }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            activeTintColor: '#ffffff',
            showIcon: true,
        }
    });
export default NavigateTabs;

const styles = StyleSheet.create({
    container : {
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
    },
    buttonText: {
      fontSize:16,
      fontWeight:'500',
      color:'#ffffff',
      textAlign:'center'
    }
});