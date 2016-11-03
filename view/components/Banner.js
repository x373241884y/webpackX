import React from 'react';
var Banner = React.createClass({
	render() {
		return (
			<div className="banner">
				<div className="container">
					本app参考:
					<strong>
						<a href="http://www.angularjsapi.cn/">http://www.angularjsapi.cn/</a>
					</strong>
					<strong>
						<a href="http://lesscss.cn/">http://lesscss.cn/</a>
					</strong>
				</div>
			</div>
		)
	}
});

export default Banner;