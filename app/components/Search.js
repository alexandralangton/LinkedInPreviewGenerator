import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setProfile }) => {
	const [url, setUrl] = useState('');

	const getPreview = async (e) => {
		if (!url.match(/www.linkedin.com/i)) {
			alert('Please enter a valid linkedin url');
		} else {
			e.preventDefault();
			let urlEnding = url
				.replace(/((https?:\/\/)?www\.linkedin\.com(\/)?(in)?)(\/)/g, '')
				.replace(/(\/)$/, '');
			const res = await axios.get(`/api/preview/${urlEnding}`);
			setProfile(res.data);
		}
		setUrl('');
	};

	return (
		<>
			<form onSubmit={getPreview}>
				<h1>Please enter a valid LinkedIn url:</h1>
				<br />
				<input
					name="url"
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button type="submit">Submit</button>
			</form>
		</>
	);
};

export default Search;
