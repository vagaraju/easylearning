import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,AppRegistry} from 'react-native';



export default class Home extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Home'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> key information of the company .</Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Home",() => Home);

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