import React from 'react';


var Footer = React.createClass({
	render: function () {
		return (
			<div>
				<h2>Footer</h2>
				{/* Render the child route component */}
				{this.props.children}
			</div>
		);
	}
});

export default Footer;