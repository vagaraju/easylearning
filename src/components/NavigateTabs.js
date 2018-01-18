import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Contact from '../pages/bartabs/Contact';
import Home from '../pages/bartabs/Home';
import Settings from '../pages/bartabs/Settings';
import Map from '../pages/bartabs/Map';

const NavigateTabs = TabNavigator({
    Home: { screen: Home },
    Map: { screen: Map },
    Settings: { screen: Settings },
    Contact: { screen: Contact }
    }, {
        tabBarPosition: 'bottom',
        animationEnabled: true,
        tabBarOptions: {
            style: {
                backgroundColor: '#1c313a',
              },
            activeTintColor: '#ffffff',
            showIcon: true,
        }
    });
export default NavigateTabs;