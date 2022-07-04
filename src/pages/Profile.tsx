/* eslint-disable react-hooks/exhaustive-deps */
import { faPencil } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios, { AxiosResponse, AxiosError } from 'axios';
import config from 'env';
import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { loadingDiscoverStart, loadingDiscoverSuccess, loadDiscoverFailure } from 'state/slices/discoverSlice';
import { loadingFollowersStart, loadingFollowersSuccess, loadFollowersFailure } from 'state/slices/followersSlice';
import { loadingFollowingsStart, loadingFollowingsSuccess, loadFollowingsFailure } from 'state/slices/followingsSlice';

const links = [
	{
		id: 1,
		title: 'About',
		link: '/profile',
	},
	{
		id: 2,
		title: 'Timeline',
		link: '/profile/posts',
	},
	{
		id: 3,
		title: 'Followers',
		link: '/profile/followers',
	},
	{
		id: 4,
		title: 'Followings',
		link: '/profile/followings',
	},
	{
		id: 5,
		title: 'Discover',
		link: '/profile/discover',
	},
];
const Profile = () => {
	const location = useLocation().pathname;
	const {
		followers,
		followings,
		root: { user },
	} = useAppSelector((state) => state);
	const dispatch = useAppDispatch();
	const { accessToken } = useAppSelector((state) => state.root.auth);
	const protectedAxios = axios.create({
		baseURL: config.BACKEND_BASE_URL,
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	});
	React.useEffect(() => {
		const loadFollowers = () => {
			dispatch(loadingFollowersStart());
			protectedAxios
				.get('/users/followers')
				.then((res: AxiosResponse) => res.data)
				.then((data: AxiosResponse['data']) => {
					dispatch(loadingFollowersSuccess(data));
				})
				.catch((err: AxiosError) => {
					dispatch(loadFollowersFailure());
				});
		};

		const loadDiscover = () => {
			dispatch(loadingDiscoverStart());
			protectedAxios
				.get('/users')
				.then((res: AxiosResponse) => res.data)
				.then((data: AxiosResponse['data']) => {
					dispatch(loadingDiscoverSuccess(data));
				})
				.catch((err: AxiosError) => {
					dispatch(loadDiscoverFailure());
				});
		};

		const loadFollowings = () => {
			dispatch(loadingFollowingsStart());
			protectedAxios
				.get('/users/followings')
				.then((res: AxiosResponse) => res.data)
				.then((data: AxiosResponse['data']) => {
					dispatch(loadingFollowingsSuccess(data));
				})
				.catch((err: AxiosError) => {
					dispatch(loadFollowingsFailure());
				});
		};

		loadFollowers();
		loadFollowings();
		loadDiscover();
	},[]);
	return (
		<div className='max-w-7xl mx-auto'>
			<div>
				<div className='h-[10rem] relative md:h-[16rem] bg-black bg-opacity-30 z-10'>
					<img
						src='/cover.webp'
						alt=''
						className='w-full h-full object-cover -z-[1]'
					/>
					<img
						src={user.avatar.url ? user.avatar.url : '/user.svg'}
						alt=''
						className='w-32 h-32 rounded-full mx-auto absolute bg-white bottom-0 border-4 left-4 md:h-48 md:w-48'
					/>
				</div>
				<div className='p-4'>
					<h2 className='text-2xl font-bold'>{user.username}</h2>
					<p>{user.bio}</p>
					<div className='flex gap-3'>
						<p className='flex items-center'>
							<span className='font-bold  rounded-full px-2 text-white bg-black text-[12px] text-center'>
								{followers.people.length}{' '}
							</span>{' '}
							followers
						</p>
						<p className='flex items-center'>
							<span className='font-bold  rounded-full px-2 text-white bg-black text-[12px] text-center'>
								{followings.people.length}{' '}
							</span>{' '}
							followings
						</p>
					</div>
				</div>
				<div>
					{/* Edit profile */}
					<div className='ml-4'>
						<button
							className='bg-[#acacac86] px-4 py-2 rounded-md disabled:cursor-not-allowed'
							disabled
						>
							<FontAwesomeIcon icon={faPencil} /> Edit profile
						</button>
					</div>
				</div>
			</div>
			<div className='flex border-b border-slate-300 gap-4 py-1 text-center px-4'>
				{links.map((link, index) => (
					<Link
						key={index}
						to={link.link}
						className={`w-full h-full p-1 ${location === link.link && 'bg-blue-500 text-white'
							}`}
					>
						{link.title}
					</Link>
				))}
			</div>
			<div className='p-4'>
				<Outlet />
			</div>
		</div>
	);
};

export default Profile;
