"use strict"
import React from 'react';

export default class HeaderComponent extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		const menu = this.props.menu.map((item) => {
			return <li key={item.title} className="header_menu_item">{item.title}</li>
		});

		return (
			<div className="header">
				<ul className="header_menu">
					{menu}
				</ul>
			</div>

			)
	}
}