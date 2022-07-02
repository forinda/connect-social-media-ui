import HomeAside from 'components/HomeAside';
import HomeFeedPosts from 'components/HomeFeedPosts';
import HomeSidebar from 'components/HomeSidebar';
import React from 'react';

export const HomeFeeds = () => {
	return (
		<div className='flex'>
			{/* Sidebar */}
			<div className='hidden md:block w-3/12'>
				<HomeSidebar />
			</div>
			{/* main */}
			<main className='w-full px-4 md:w-6/12'>
				<HomeFeedPosts/>
			</main>
			{/* aside */}
			<div className='hidden md:block w-3/12'>
				<HomeAside />
			</div>
		</div>
	);
};
