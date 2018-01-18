import React from 'react';
import {Text,View,Image,AppRegistry} from 'react-native';

import {TabNavigator} from 'react-navigation';

import Contact from '../../pages/bartabs/Contact';
import Home from '../../pages/bartabs/Home';
import Settings from '../../pages/bartabs/Settings';
import Map from '../../pages/bartabs/Map';
import styles from '../../common/Styles';

const NavigateTabs = TabNavigator(
    {
    Home: { screen: Home },
    Map: { screen: Map },
    Settings: { screen: Settings },
    Contact: { screen: Contact }
    }, 
    styles.TabNavigatorConfig);

export default NavigateTabs;
