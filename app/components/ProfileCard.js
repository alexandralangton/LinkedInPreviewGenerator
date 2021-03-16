import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ProfileCard = (props) => {
	const { title, description, src, url } = props.profile;
	return (
		<div id="profileCard">
			<div>
				<img src={src} id="previewImg" />
			</div>
			<div id="cardText">
				<a href={url} target="_blank" rel="noopener noreferrer">
					<span>{url}</span>
				</a>
				<br />
				<h3>{ReactHtmlParser(title.replace(/<br>/, ''))}</h3>
				<p>{ReactHtmlParser(description.replace(/<br>/, ''))}</p>
			</div>
		</div>
	);
};

export default ProfileCard;
