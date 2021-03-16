import React, { useState } from 'react';
import Search from './Search';
import Previews from './Previews';

const Root = () => {
	const [profile, setProfile] = useState({});
	return (
		<>
			<Search setProfile={setProfile} />
			<Previews profile={profile} setProfile={setProfile} />
		</>
	);
};

export default Root;
