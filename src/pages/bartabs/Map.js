import React from 'react';
import {Text,View,Image,AppRegistry,StyleSheet,Dimensions} from 'react-native';
//import styles from '../components/Styles';
//AIzaSyCNht_GKDHZmGv2vFjp4pSocwy4ZcbEcjM    -- map google
//https://developers.google.com/maps/documentation/android-api/signup#release-cert   -- get the key.
import MapView from 'react-native-maps';
import styles from '../../common/Styles';
import * as Constants from '../../common/Constants';

const { width, height } = Dimensions.get('window');
const ASPECT_RATIO  = width / height;
const LONGITUDE_DELTA = (Constants.MAP_CORDINATES.LATITUDE_DELTA * ASPECT_RATIO);

export default class Map extends React.Component {
    
    static navigationOptions = {
        tabBarLabel : 'Map',
        tabBarIcon: () => (
            <Image source={Constants.IMAGE_PATHS.MAP_IMG_PATH}
            style={styles.tabImageColor}/>
        )
    }
    render(){
        return(
            <View style={styles.container}>
            <MapView style = {styles1.mapcontainer}
              showsUserLocation={true}
              showsMyLocationButton={false}
              zoomEnabled = {true}
              region={{
                latitude: Constants.MAP_CORDINATES.LATITUDE,
                longitude: Constants.MAP_CORDINATES.LONGITUDE,
                latitudeDelta:Constants.MAP_CORDINATES.LATITUDE_DELTA,
                longitudeDelta: LONGITUDE_DELTA,
                }} >

    <MapView.Marker
            coordinate={{latitude: Constants.MAP_CORDINATES.LATITUDE,
                longitude: Constants.MAP_CORDINATES.LONGITUDE}}
            title={"easyLearning"}
            description={"Interactive education game for kids"}
         />
            </MapView>
    </View>
           /* <View style={styles.container}>
                <MapView
                    style={styles.map}
                    Region={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                }}/>
            </View>*/
        );
    }
}
AppRegistry.registerComponent("Map",() => Map);

const styles1 = StyleSheet.create({
  /*  containers: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    map: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },container: {
        flex: 1,
    },*/
    mapcontainer: {
        flex: 1,
        width: width,
        height: height,
      },
  });