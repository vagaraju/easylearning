import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,Image,AppRegistry} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Settings extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Settings',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../images/settings.png')} 
            style={{width: 30, height: 30 , tintColor: 'white'}}/>
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