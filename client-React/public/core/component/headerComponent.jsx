"use strict"
import React from 'react';
import $ from "jquery";

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		$(".header_menu_item").hover(function() {
			$(".header_menu_submenu", this).toggleClass("visible");
		});
	}

	render() {
		const menu = this.props.menu.map((item) => {
			return (
				<li key={item.title} className="header_menu_item">{item.title}
					<ul className="header_menu_submenu">
						{(() => {
							return item.items.map((subitem) => {
								return <li key={subitem} className="header_menu_submenu_item">{subitem}</li>	
							})
						})()}
					</ul>
				</li>
				)
		});

		return (
			<div className="header">
				<div className="header_burger" onClick={this.props.toggleSidebar}>
					<span className="header_burger_top"></span>
					<span className="header_burger_middle"></span>
					<span className="header_burger_bottom"></span>
				</div>
				<ul className="header_menu">
					{menu}
				</ul>
				<div className="header_search">
					<div className="header_search_input-wrapper">
						<input className="header_search_input hidden" placeholder="SEARCH..."/>
					</div>
					<span className="header_search_button" onClick={this.clickSearchButton.bind(this)}></span>
				</div>
			</div>

			)
	}

	clickSearchButton() {
  		$(".header_search_input").toggleClass("hidden");
  	}
}