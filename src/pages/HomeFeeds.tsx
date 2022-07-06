import axios, { AxiosError, AxiosResponse } from 'axios';
import HomeAside from 'components/HomeAside';
import HomeFeedPosts from 'components/HomeFeedPosts';
import HomeSidebar from 'components/HomeSidebar';
import config from 'env';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import {
	loadDiscoverFailure,
	loadingDiscoverStart,
	loadingDiscoverSuccess,
} from 'state/slices/discoverSlice';
import {
	loadFeedsFailure,
	loadingFeedsStart,
	loadingFeedsSuccess,
} from 'state/slices/feedsSlice';
import {
	loadFollowersFailure,
	loadingFollowersStart,
	loadingFollowersSuccess,
} from 'state/slices/followersSlice';
import {
	loadFollowingsFailure,
	loadingFollowingsStart,
	loadingFollowingsSuccess,
} from 'state/slices/followingsSlice';

export const HomeFeeds = () => {
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
		const loadFeeds = () => {
			dispatch(loadingFeedsStart());
			protectedAxios
				.get('/feeds')
				.then((res: AxiosResponse) => res.data)
				.then((data: AxiosResponse['data']) => {
					console.log(data)
					dispatch(loadingFeedsSuccess(data));
				})
				.catch((err: AxiosError) => {
					dispatch(loadFeedsFailure());
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

		loadFeeds();
		loadFollowers();
		loadFollowings();
		loadDiscover();
	}, [dispatch, protectedAxios]);

	return (
		<div className='flex'>
			{/* Sidebar */}
			<div className='hidden md:block w-3/12'>
				<HomeSidebar />
			</div>
			{/* main */}
			<main className='w-full px-4 md:w-6/12'>
				<HomeFeedPosts />
			</main>
			{/* aside */}
			<div className='hidden md:block w-3/12'>
				<HomeAside />
			</div>
		</div>
	);
};
