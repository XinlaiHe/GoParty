"use strict"
import React from 'react';
import $ from "jquery";

export default class sideBarComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const menu = this.props.menu.map((item) => {
			return (
				<li key={item.title} className="sidebar_menu_item">{item.title}
					<ul className="sidebar_menu_submenu">
						{(() => {
							return item.items.map((subitem) => {
								return <li key={subitem} className="sidebar_menu_submenu_item">{subitem}</li>	
							})
						})()}
					</ul>
				</li>
				)
		});

		return (
			<div className={this.props.sidebar == "hidden" ? "sidebar-hidden" : "sidebar"}>
				{menu}
			</div>
			)
	}
}