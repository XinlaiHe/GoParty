"use strict";
import React from 'react';

class PartyComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const prefix = "data:image/jpg;base64,";
		return (
			<div className="parties_party">
				<span className="parties_party_title">{this.props.party.activityName}</span>
				<img className="parties_party_image" src={prefix + this.props.party.image}/>
				<span className="parties_party_location">{this.props.party.location}</span>
			</div>
			)
	}
}
	
export default PartyComponent;