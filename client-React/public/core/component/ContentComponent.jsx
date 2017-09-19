"use strict";
import React from 'react';

class ContentComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const parties = this.props.parties.map(party => {
			const image = "data:image/jpg;base64," + party.image;
			return (
				<div key={party.id}>
					<h1>{party.activityName}</h1>
					<h2>{party.location}</h2>
					<image src={image}/>
				</div>
				)
		});

		return (
			<div>
				{parties}
			</div>
			)
	}
}

export default ContentComponent;