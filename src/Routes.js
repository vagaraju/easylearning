import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import Login from './pages/login/Login';
import Signup from './pages/login/Signup';
import DashBoard from './components/bartabs/DashBoard';
import Error from './components/Error';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" >
			      <Scene key="login" component={Login} title="Login" initial={true} hideNavBar={true}/>
				  <Scene key="error" component={Error} hideNavBar={true}/>
			      <Scene key="signup" component={Signup} title="Register" hideNavBar={true}/>
				  <Scene key="dashBoard" component={DashBoard} title="DashBoard"/>
				  
				  </Stack>
				
			 </Router>
			)
	}
}