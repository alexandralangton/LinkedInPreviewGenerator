import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Previews = (props) => {
	const { title, description, src, url } = props.profile;
	if (title) {
		return (
			<>
				<h1>LinkedIn Profile</h1>
				<span>{url}</span>
				<br />
				<h3>
					<b>{ReactHtmlParser(title)}</b>
				</h3>
				<span>{ReactHtmlParser(description)}</span>
				<br />
				<img src={src} width="200px" height="200px" />
			</>
		);
	} else {
		return null;
	}
};

export default Previews;
