import React, { useState } from 'react';
import axios from 'axios';

const Search = () => {
	const [url, setUrl] = useState('');
	const [profile, setProfile] = useState({});

	const getPreview = async (e) => {
		e.preventDefault();
		let endIdx = url.lastIndexOf('/');
		const res = await axios.get(`/api/preview/${url.slice(endIdx + 1)}`);
		setProfile(res.data);
	};

	return (
		<>
			<form onSubmit={getPreview}>
				<label htmlFor="url">Please enter a valid LinkedIn url: </label>
				<br />
				<br />
				<input
					name="url"
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
			{profile.title && (
				<>
					<h1>We found you!</h1>
					<span>{profile.url}</span>
					<br />
					<h3>{profile.title}</h3>
					<span>{profile.description}</span>
					<br />
					<img src={profile.src} width="200px" height="200px" />
				</>
			)}
		</>
	);
};

export default Search;
