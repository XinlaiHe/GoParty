"use strict";
import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const inputFields = this.props.inputFields.map(inputField => {
			return (
				<TextField key={inputField.name} hintText={inputField.name} style={inputField.style}/>
				)
		});
		const links = this.props.links.map(link => {
			return (
				<a key={link.name} href={this.url}>{link.name}</a>
				)
		});
		const buttons = this.props.buttons.map(button => {
			return (
				<RaisedButton key={button.name} label={button.name} style={button.style} backgroundColor={button.color}/>
				)
		});

		return (
			<div className="form">
				<div className="form_inputs">
					{inputFields}
				</div>
				<div className="form_links">
					{links}
				</div>
				<div className="form_buttons">
					{buttons}
				</div>
			</div>
			)
	}
}
	
export default FormComponent;