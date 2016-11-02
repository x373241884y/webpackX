import React from 'react';
import Router, { RouteHandler,Link } from 'react-router';
import Components, { Header,Left } from './components';

let App = React.createClass({
	render: function () {
		return (
			<div class="container docs-container">
				<div class="row">
					<div class="col-md-3">
						<Left />
					</div>
					<div class="col-md-9" role="main">
						<div class="panel docs-content">
							<div class="col-md-12">{this.props.children}</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

});
export default  App;