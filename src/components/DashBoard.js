import React from 'react';
import {AppRegistry} from 'react-native';
import NavigateTabs from '../components/NavigateTabs';

export default class DashBoard extends React.Component {
    render(){
        return(
            <NavigateTabs  />
        );
    }
}
AppRegistry.registerComponent("DashBoard",() => DashBoard);