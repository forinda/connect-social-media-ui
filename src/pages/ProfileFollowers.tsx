import React from 'react';
import { useAppSelector } from 'state/hooks';
import ProfileFollowersComp from '../components/ProfileFollowersComp';

const ProfileFollowers = () => {
	const { people } = useAppSelector(state => state.followers)
	return (
		<ProfileFollowersComp title='followers' follows={people} />
	);
};

export default React.memo(ProfileFollowers);
