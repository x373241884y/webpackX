import React from 'react';
import  { Link } from 'react-router';
import book1 from '../config';
import $ from 'jquery';

var Footer = React.createClass({
	componentDidMount: function () { //插入dom后
		$("#slidetarget").bind("click", function (event) {
			var target = event.target;
			if ($(target).hasClass("level1")) {
				var level2_ul = $(target).next();
				if (level2_ul.is(":visible")) {
					level2_ul.slideUp();
					$(target).parent().removeClass("active");
				} else {
					$(target).parent().parent().find("li").removeClass("active");
					$(target).parent().parent().find("ul.nav").slideUp();
					$(target).parent().find("ul.nav").slideDown();
					$(target).parent().addClass("active");
				}
			} else if ($(target).hasClass("level2")) {
				$(target).parent().parent().children().removeClass("active");
				$(target).parent().addClass("active");
			}
		});
	},
	render: function () {
		var book = book1;
		return (
			<div className="sidebar hidden-print affix" role="complementary">
				<div id="toc">
					<ul className="nav sidenav" id="slidetarget">
						{
							book.map(function (row, index1) {
								return (
									<li key={index1}>
										<a className="level1" href="#">{index1 + 1} . {row.name}</a>
										<ul className="nav">
											{
												row.children.map(function (item,index2) {
													return <li key={index2}><Link className="level2" to={item.url}>{index1+1}-{index2+1}.{item.name}</Link></li>
												})
											}
										</ul>
									</li>
								)
							})
						}

					</ul>
					<div className="detail">
						{this.props.children}
					</div>
				</div>
			</div>
		);
	}
});

export default Footer;