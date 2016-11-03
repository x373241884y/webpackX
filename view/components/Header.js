import React from 'react';
var Header = React.createClass({
	render() {
		return (
			<header className="navbar navbar-inverse navbar-fixed-top docs-nav" role="banner">
				<div className="container">
					<div className="navbar-header">
						<button className="navbar-toggle" type="button" data-toggle="collapse"
						        data-target=".bs-navbar-collapse">
							<span className="sr-only">Toggle navigation</span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
							<span className="icon-bar"></span>
						</button>
						<a href="../#" className="navbar-brand" alt="vx"></a>
					</div>
					<nav className="collapse navbar-collapse bs-navbar-collapse" role="navigation">
						<ul className="nav navbar-nav">
							<li className="active">
								<a href="">参考手册</a>
							</li>
							<li >
								<a href="">开发规范</a>
							</li>
						</ul>
						<ul className="nav navbar-nav navbar-right">
							<li className="dropdown">
								<a href="" className="dropdown-toggle" data-toggle="dropdown">GitHub <b
									className="caret"></b></a>
								<ul className="dropdown-menu">
									<li><a href="https://github.com/less/less-docs.git">Docs Repo</a></li>
								</ul>
							</li>
						</ul>
					</nav>
				</div>
			</header>
		)
	}
});

export default Header;