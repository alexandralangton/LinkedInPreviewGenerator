import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ setProfile }) => {
	const [url, setUrl] = useState('');

	const getPreview = async (e) => {
		e.preventDefault();
		if (!url.match(/www.linkedin.com/i)) {
			toast.error('Please enter a valid LinkedIn url');
		} else {
			let urlEnding = url
				.replace(/((https?:\/\/)?www\.linkedin\.com(\/)?(in)?)(\/)/g, '')
				.replace(/(\/)$/, '');
			const res = await axios.get(`/api/preview/${urlEnding}`);
			if (res.status !== 200) {
				toast.error(res.data);
			}
			setProfile(res.data);
		}
		setUrl('');
	};

	return (
		<>
			<ToastContainer />
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
					<br />
				</form>
			</div>
		</>
	);
};

export default Search;
