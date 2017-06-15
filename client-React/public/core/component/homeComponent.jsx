"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAction from '../../store/action/homeAction';
import "../style/main.scss";

class HomeComponent extends React.Component{

	constructor() {
		super();
	}

	render() {
		return (
			<div className="main">
				Hello World
			</div>

			)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(homeAction, dispatch)
}

export default connect(null, mapDispatchToProps)(HomeComponent);