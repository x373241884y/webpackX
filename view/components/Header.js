import React from 'react';
var Header = React.createClass({
	render() {
		return (
			<header class="navbar navbar-inverse navbar-fixed-top docs-nav" role="banner">
				<div class="container">
					<div class="navbar-header">
						<button class="navbar-toggle" type="button" data-toggle="collapse"
						        data-target=".bs-navbar-collapse">
							<span class="sr-only">Toggle navigation</span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a href="../#" class="navbar-brand" alt="vx"></a>
					</div>
					<nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
						<ul class="nav navbar-nav">
							<li class="active" ng-click="changeBook($event,1)">
								<a href="">参考手册</a>
							</li>
							<li ng-click="changeBook($event,2)">
								<a href="">开发规范</a>
							</li>
						</ul>
						<ul class="nav navbar-nav navbar-right">
							<li class="dropdown">
								<a href="" class="dropdown-toggle" data-toggle="dropdown">GitHub <b
									class="caret"></b></a>
								<ul class="dropdown-menu">
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