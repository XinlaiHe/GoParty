"use strict";
import React from 'react';
import FormComponent from '../../core/component/formComponent.jsx';

class LoginComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const content = {
			inputFields: [
				{ name: "username", style: { width: "100%" } },
				{ name: "password", style: { width: "100%" } }
			],
			links: [
				{ name: "Forget password?", url: "url", style: { width: "50%" } },
				{ name: "No account? Register", url: "url", style: { width: "50%" } }
			],
			buttons: [
				{ name: "Login", action: undefined, style: { width: "50%" }, color: "#03A9F4" },
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
	
export default LoginComponent;