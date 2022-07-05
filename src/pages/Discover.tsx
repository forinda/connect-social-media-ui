/* eslint-disable react-hooks/exhaustive-deps */
import ProfileFollowersComp from 'components/ProfileFollowersComp';
import React from 'react';
import { useAppSelector } from 'state/hooks';

const Discover = () => {
	const {
		discover,
	} = useAppSelector((state) => state);
	
	return (
		<div>
			<ProfileFollowersComp title='No users to follow yet'
				follows={discover.people}
			/>
		</div>
	);
};

export default Discover;
