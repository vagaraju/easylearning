import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Contact from '../pages/Contact';
import Home from '../pages/Home';
import Settings from '../pages/Settings';
import Map from '../pages/Map';

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