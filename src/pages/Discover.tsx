import ProfileFollowersComp from 'components/ProfileFollowersComp';
import React from 'react';
import { useAppSelector } from 'state/hooks';

const Discover = () => {
	const {
		discover,
		root: { user },
		followings,
	} = useAppSelector((state) => state);
	return (
		<div>
			<ProfileFollowersComp
				follows={discover.people.filter(
					(person) =>
						!(followings.people.find((p) => p._id === person._id) 
            ||
						person._id === user._id)
				)}
			/>
		</div>
	);
};

export default Discover;
