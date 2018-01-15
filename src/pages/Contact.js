import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,AppRegistry} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Contact'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> office contact information.</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Contact",() => Contact);

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