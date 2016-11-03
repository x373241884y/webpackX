import React from 'react';
import Router, { RouteHandler,Link } from 'react-router';
import Component from './components/index';

var Header = Component.Header;
var Banner = Component.Banner;
var Wraper = Component.Wraper;
var Footer = Component.Footer;

let App = React.createClass({
	render: function () {
		return (
			<div className="app">
				<Header/>
				<Banner/>
				<Wraper/>
				<Footer/>
			</div>
		);
	}

});
export default  App;