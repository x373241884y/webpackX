import React from 'react';
import {render} from 'react-dom';
import Router,{Route, IndexRoute, Link, hashHistory } from 'react-router';
import {Header,Main,Footer} from './components';

import App from './app';


var routes = (
	<Router history={hashHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Header}/>
			<Route path="about" component={Main}/>
			<Route path="inbox" component={Footer}/>
		</Route>
	</Router>
);

export default routes;