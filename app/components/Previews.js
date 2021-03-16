import React from 'react';
import ProfileCard from './ProfileCard';

const Previews = (props) => {
	if (props.profile.title) {
		return (
			<div id="cardBox" className="whiteBox">
				<h2>Generated Profile Card:</h2>
				<ProfileCard profile={props.profile} />
			</div>
		);
	} else {
		return null;
	}
};

export default Previews;
