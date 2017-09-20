"use strict";
import React from 'react';
import PartyComponent from './PartyComponent.jsx';

class ContentComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const parties = this.props.parties.map(party => <PartyComponent key={party.id} party={party}/>);
		
		return (
			<div className="parties">
				{parties}
			</div>
			)
	}
}

export default ContentComponent;