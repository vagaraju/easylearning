import React from 'react';
import {  StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity ,Image,AppRegistry} from 'react-native';
import MapView from 'react-native-maps';


export default class Map extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Map',
        tabBarIcon: ({tintColor}) => (
            <Image source={require('../images/map.png')} 
            style={{width: 30, height: 30 , tintColor: 'white'}}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
               {/* <MapView
                    initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                    }}
                /> */}
               <Text> map needs to be displayed here. </Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Map",() => Map);

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