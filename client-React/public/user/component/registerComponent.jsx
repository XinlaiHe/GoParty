"use strict";
import React from 'react';
import $ from 'jquery';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as userAction from "../../store/action/userAction";
import FormComponent from '../../core/component/formComponent.jsx';

class RegisterComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const registerEvent = function(event) {
			const username = $("#username").val();
			const password = $("#password").val();
			const password_repeat = $("#password_repeat").val();

			if (password == password_repeat) {
				this.props.register($("#username").val(), $("#password").val())
			} else {
				console.log("Password mismatch");
			}
		};
		const content = {
			title: "User Register",
			inputFields: [
				{ name: "username", id:"username", style: { width: "100%" } },
				{ name: "password", id:"password", style: { width: "100%" } },
				{ name: "password again", id:"password_repeat", style: { width: "100%" } }
			],
			links: [
				{ name: "Forget password?", url: "url", style: { width: "50%" } },
				{ name: "Have account? Login", url: "/login", style: { width: "50%" } }
			],
			buttons: [
				{ name: "Register", action: registerEvent.bind(this), style: { width: "50%" }, color: "#03A9F4" },
				{ name: "Cancel", action: undefined, style: { width: "50%" }, color: "#FAFAFA" }
			],
			validation: []
		};

		return (
			<div className="user user-register">
				<FormComponent {...content}/>
			</div>
			)
	}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(userAction, dispatch)
}

export default connect(null, mapDispatchToProps)(RegisterComponent);