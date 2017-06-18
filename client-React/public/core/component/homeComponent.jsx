"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../store/action/userAction';
import HeaderComponent from "./headerComponent.jsx";

class HomeComponent extends React.Component{

	constructor(props) {
		super(props);
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
				<HeaderComponent menu={menu}/>
			</div>

			)
	}
}

function mapStateToProps(state) {
  return {
  	state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);