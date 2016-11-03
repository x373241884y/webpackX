import React from 'react';
import {render} from 'react-dom';
import Router,{Route, IndexRoute, Link, hashHistory} from 'react-router';

import App from './app';

let Home = React.createClass({
	render: function () {
		return (
			<div>home....</div>
		)
	}
});

let proxyRoute = React.createClass({
	render: function () {
		return (
			<div>{children}</div>
		)
	}
});


var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="/:routeurl" component={proxyRoute}/>
	</Route>
);

export default routes;