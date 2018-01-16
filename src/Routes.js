import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/Login';
import Signup from './pages/Signup';
import Profile from './pages/Profile';
import DashBoard from './components/DashBoard';
import Error from './components/Error';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" >
			      <Scene key="login" component={Login} title="Login" initial={true} hideNavBar={true}/>
				  <Scene key="error" component={Error} hideNavBar={true}/>
			      <Scene key="signup" component={Signup} title="Register" hideNavBar={true}/>
				  <Scene key="profile" component={Profile} title="Profile"/>
				  <Scene key="dashBoard" component={DashBoard} title="DashBoard"/>
				  
				  </Stack>
				
			 </Router>
			)
	}
}