import React from 'react';
import {render} from 'react-dom';
import $ from 'jquery';
import Router,{Route, IndexRoute, Link, hashHistory} from 'react-router';

import App from './app';
import config from './config';
let Home = React.createClass({
	render: function () {
		return (
			<div>home....</div>
		)
	}
});

let proxyRoute = React.createClass({
	componentDidMount: function () {
		$.ajax({
			url: "/angular/ng/function/bind.html",
			type: 'GET'
		}).done((data)=> {
			$("#routeview").html(data);
			this.setState({text: 'Success'});
		}).fail(()=> {
			this.setState({text: 'Fail'});
		});
	},
	componentWillMount: function () {
		this.state = {
			text: 'Pending...'
		};
	},
	componentWillReceiveProps: function (nextProps) {
		var tplUrl = config.getUrl(nextProps.params.routeurl);
		console.log(tplUrl);
		$.ajax({
			url: tplUrl,
			type: 'GET'
		}).done((data)=> {
			$("#routeview").html(data);
			this.setState({text: 'Success'});
		}).fail(()=> {
			this.setState({text: 'Fail'});
		});
	},
	render: function () {
		return (
			<div id="routeview"></div>
		)
	}
});


var routes = (
	<Route path="/" component={App}>
		<IndexRoute component={Home}/>
		<Route path="doc/:routeurl" component={proxyRoute}/>
	</Route>
);

export default routes;