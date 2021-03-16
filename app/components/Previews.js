import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const Previews = (props) => {
	const { title, description, src, url } = props.profile;
	if (title) {
		return (
			<div id="cardBox" className="whiteBox">
				<h2>Generated Profile Card:</h2>
				<div id="profileCard">
					<div>
						<img src={src} id="previewImg" />
					</div>
					<div id="cardText">
						<a href={url} target="_blank" rel="noopener noreferrer">
							<span>{url}</span>
						</a>
						<br />
						<h3>{ReactHtmlParser(title)}</h3>
						<p>{ReactHtmlParser(description)}</p>
					</div>
				</div>
			</div>
		);
	} else {
		return null;
	}
};

export default Previews;
