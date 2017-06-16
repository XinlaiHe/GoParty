"use strict";
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from '../../store/action/userAction';
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

function mapStateToProps(state) {
  return {
  	state
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userAction, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);