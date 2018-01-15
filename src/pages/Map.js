import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,AppRegistry} from 'react-native';



export default class Map extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Map'
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> Shows the GPS navigation for office location.</Text>
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