"use strict";
import React from 'react';

class SharingComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const prefix = "data:image/jpg;base64,";
		return (
			<div className="sharings_sharing">
				<span className="sharings_sharing_title">{this.props.sharing.name}</span>
				<img className="sharings_sharing_image" src={prefix + this.props.sharing.image}/>
				<span className="sharings_sharing_location">{this.props.sharing.location}</span>
			</div>
			)
	}
}
	
export default SharingComponent;