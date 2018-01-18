import React from 'react';
import {AppRegistry} from 'react-native';
import NavigateTabs from './NavigateTabs';

export default class DashBoard extends React.Component {
    render(){
        return(
            <NavigateTabs  />
        );
    }
}
AppRegistry.registerComponent("DashBoard",() => DashBoard);