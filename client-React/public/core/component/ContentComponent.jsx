"use strict";
import React from 'react';
import SharingComponent from './sharingComponent.jsx';

class ContentComponent extends React.Component{

	constructor(props) {
		super(props);
	}

	render() {
		const sharings = this.props.sharings.map(sharing => <SharingComponent key={sharing.id} sharing={sharing}/>);
		
		return (
			<div className="sharings">
				{sharings}
			</div>
			)
	}
}

export default ContentComponent;