import React from 'react';
import Router, { RouteHandler,Link } from 'react-router';
import Component from './components/index';

var Header = Component.Header;
var Banner = Component.Banner;
var Left = Component.Left;
var Footer = Component.Footer;

let App = React.createClass({
	render: function () {
		return (
			<div className="app">
				<Header/>
				<Banner/>
				<div className="container docs-container">
					<div className="row">
						<div className="col-md-3">
							<div>
								<Left/>
							</div>
						</div>
						<div className="col-md-9" role="main">
							<div className="panel docs-content">
								<div className="col-md-12">
									{this.props.children}
								</div>
							</div>
						</div>
					</div>
				</div>
				<Footer/>
			</div>
		);
	}

});
export default  App;