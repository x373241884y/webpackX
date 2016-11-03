import React from 'react';
import Left from './Left';
import {RouterContext} from 'react-router'
var Wraper = React.createClass({
	render: function () {
		return (
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
								<RouterContext />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
});

export default Wraper;