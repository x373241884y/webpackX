import React from 'react';
var Header = React.createClass({
	render() {
		return (
			<div>
				<h2>Header</h2>
				{/* Render the child route component */}
				{this.props.children}
			</div>
		)
	}
});

export default Header;