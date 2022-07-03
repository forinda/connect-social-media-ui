import {
	faFeed,
	faHome,
	faSearchPlus,
	faUser,
	faUsers,
	faUsersCog,
} from '@fortawesome/free-solid-svg-icons';

export const links = {
	sidebar: [
		{ id: 0, path: '/', icon: faHome, title: 'Home' },
		{ id: 1, path: '/profile/friends', icon: faUsers, title: 'Friends' },
		{ id: 2, path: '/profile', icon: faUser, title: 'Profile' },
		{
			id: 3,
			path: '/profile/followers',
			icon: faUsersCog,
			title: 'Followers',
		},
		{
			id: 4,
			path: '/profile/discover',
			icon: faSearchPlus,
			title: 'Discover',
		},
		{
			id: 5,
			path: '/profile/followings',
			icon: faUsersCog,
			title: 'Followings',
		},
		{ id: 6, path: '/profile/timeline', icon: faFeed, title: 'Posts' },
	],
};
