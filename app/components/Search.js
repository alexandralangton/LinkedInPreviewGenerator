import React, { useState } from 'react';
import axios from 'axios';

const Search = ({ setProfile }) => {
	const [url, setUrl] = useState('');

	const getPreview = async (e) => {
		e.preventDefault();
		let endIdx = url.lastIndexOf('/');
		const res = await axios.get(`/api/preview/${url.slice(endIdx + 1)}`);
		setProfile(res.data);
		setUrl('');
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
		</>
	);
};

export default Search;
