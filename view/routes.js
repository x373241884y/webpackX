import React from 'react';
import {render} from 'react-dom';
import Router,{Route, IndexRoute, Link, hashHistory} from 'react-router';
import {Banner,Header,Left,Main,Footer} from './components';

let Home = React.createClass({
	render: function () {
		return (
				<div>home....</div>
		)
	}
});

import App from './app';

var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
	</Route>
);

export default routes;