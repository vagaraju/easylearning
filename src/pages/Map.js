import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import styles from '../components/Styles';
import MapView from 'react-native-maps';

export default class Map extends React.Component {
    static navigationOptions = {
        tabBarLabel : 'Map',
        tabBarIcon: () => (
            <Image source={require('../images/map.png')} 
            style={styles.tabImageColor}/>
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
               <Text style={styles.buttonText}> Company Location map needs to be displayed here. </Text>
            </View>
        );
    }
}
AppRegistry.registerComponent("Map",() => Map);