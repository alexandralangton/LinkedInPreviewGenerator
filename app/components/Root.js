import React, { useState } from 'react';
import Search from './Search';
import Previews from './Previews';

const Root = () => {
	const [profile, setProfile] = useState({});
	return (
		<div className="flexCenter">
			<Search setProfile={setProfile} />
			<Previews profile={profile} setProfile={setProfile} />
		</div>
	);
};

export default Root;
