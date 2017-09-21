"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as sidebarAction from '../../store/action/sidebarAction';
import * as sharingAction from '../../store/action/sharingAction';
import HeaderComponent from "./headerComponent.jsx";
import SideBarComponent from "./sideBarComponent.jsx";
import ContentComponent from "./contentComponent.jsx";

class HomeComponent extends React.Component{

	constructor(props) {
		super(props);
		this.props.loadSharings();
	}

	render() {
		const menu = [
			{ title: "HOME", items: ["title1", "title2", "title3"] },
			{ title: "FEATURES", items: ["title1", "title2"] },
			{ title: "CATEGORY", items: ["title1", "title2"] },
			{ title: "ABOUT ME", items: ["title1", "title2"] },
			{ title: "CONTACT", items: ["title1", "title2", "title3", "title4"] }
		];

		return (
			<div className="main">
				<HeaderComponent menu={menu} sidebar={this.props.sidebar} toggleSidebar={this.props.toggleSidebar}/>
				<SideBarComponent menu={menu} sidebar={this.props.sidebar}/>
				<ContentComponent sharings={this.props.sharings}/>
			</div>

			)
	}
}

function mapStateToProps(state) {

  return { sidebar: state.sidebarReducer.sidebar, sharings: state.sharingReducer.sharings }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(Object.assign({}, sharingAction, sidebarAction), dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);