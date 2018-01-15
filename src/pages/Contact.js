import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,Image,AppRegistry} from 'react-native';
import { Actions } from 'react-native-router-flux';


export default class Contact extends React.Component {
    static navigationOptions = {
        tabBarLabel : '',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../images/contact.png')} 
            style={{width: 30, height: 30 , tintColor: 'white'}}/>
        )
      /*   tabBarIcon: (
            <Image style={{ width: 50, height: 50 }} source={require('../images/study.jpg')} />
          )
       tabBarIcon: (obj) => {
            const image = obj.focused ? require('../images/study.jpg') : require('../images/study.jpg');
            return <Image style={{resizeMode:'contain', width:40, height: 40}}
                          source={image}
            />
          } */
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.buttonText}> easyLearning Inc.</Text>
                <Text style={styles.buttonText}> 1111 N 70th st Apt 101.</Text>
                <Text style={styles.buttonText}> Scottsdale , AZ.</Text>
                <Text style={styles.buttonText}> USA - 85251.</Text>
                <Text style={styles.buttonText}> Phone : (480) 765-1038</Text>

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