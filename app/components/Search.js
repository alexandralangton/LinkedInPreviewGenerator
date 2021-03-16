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
		<div id="searchBox" className="whiteBox">
			<form onSubmit={getPreview}>
				<h1>LinkedIn Preview Card Generator</h1>
				<p>Enter a valid LinkedIn url to fetch the respective preview:</p>
				<input
					id="searchbar"
					name="url"
					type="text"
					value={url}
					onChange={(e) => setUrl(e.target.value)}
				/>
				<button id="searchbutton" type="submit">
					Submit
				</button>
			</form>
		</div>
	);
};

export default Search;
