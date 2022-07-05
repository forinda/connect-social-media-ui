/* eslint-disable react-hooks/exhaustive-deps */
import ProfileFollowersComp from 'components/ProfileFollowersComp';
import React from 'react';
import { useAppSelector } from 'state/hooks';
import { IUserState } from 'state/types';

const Discover = () => {
	const {
		discover,
		followings,
		followers
	} = useAppSelector((state) => state);
	const [filteredUsers, setFilteredUsers] = React.useState<IUserState[]>([])
	const filterUsers = () => {
		const followingsSlice = followings.people.slice()
		const followersSlice = followers.people.slice()
		console.log(followersSlice);
		console.log(followingsSlice);

		const filtered = discover.people.filter((person => !(!followersSlice.find(p1 => p1._id === person._id) || followingsSlice.find(p2 => p2._id === person._id))))
		setFilteredUsers([...filtered])
	}

	React.useEffect(() => {
		filterUsers()
	}, [])
	return (
		<div>
			<ProfileFollowersComp title='No users to follow yet'
				follows={filteredUsers}
			/>
		</div>
	);
};

export default Discover;
