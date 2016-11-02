import React from 'react';


var Main = React.createClass({
	render: function () {
		return (
			<div>
				<h2>Main</h2>
				{/* Render the child route component */}
				{this.props.children}
			</div>
		);
	}
});

export default Main;