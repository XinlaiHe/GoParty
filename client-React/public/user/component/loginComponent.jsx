"use strict";
import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import FormComponent from '../../core/component/formComponent.jsx';

class LoginComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const loginEvent = function(event) {
			const username = $("#username").val();
			const password = $("#password").val();

			this.props.login($("#username").val(), $("#password").val())
		};

		const content = {
			title: "User Login",
			inputFields: [
				{ name: "username", style: { width: "100%" } },
				{ name: "password", style: { width: "100%" } }
			],
			links: [
				{ name: "Forget password?", url: "url", style: { width: "50%" } },
				{ name: "No account? Register", url: "/register", style: { width: "50%" } }
			],
			buttons: [
				{ name: "Login", action: loginEvent.bind(this), style: { width: "50%" }, color: "#03A9F4" },
				{ name: "Cancel", action: undefined, style: { width: "50%" }, color: "#FAFAFA" }
			],
			validation: []
		};

		return (
			<div className="user user-login">
				<FormComponent {...content}/>
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userAction, dispatch)
}

export default connect(null, mapDispatchToProps)(LoginComponent);