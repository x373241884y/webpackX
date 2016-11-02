import React from 'react';
import book1 from '../config';

var Footer = React.createClass({

	render: function () {
		var book = book1;
		return (
			<div class="sidebar hidden-print affix" role="complementary">
				<div id="toc">
					<ul class="nav sidenav" ui-slide-toggle>
						<li ng-repeat="row in book">
							<a class="level1" to="/home"></a>
							<ul class="nav" ng-show="row.children.length>0">
								{
									book.map(function (temp) {
										return <li><a href="/{temp.url}">{temp.name}</a></li>
									})
								}
							</ul>
						</li>
					</ul>
				</div>
			</div>
		);
	}
});

export default Footer;