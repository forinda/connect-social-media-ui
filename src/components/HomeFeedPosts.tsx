import {
	faEye,
	faHeart,
	faMessage,
	faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useAppSelector } from 'state/hooks';

const HomeFeedPosts = () => {
	const { feeds } = useAppSelector((state) => state.feeds);
	console.log(feeds);

	return (
		<div className='w-full md:p-4'>
			{feeds.length < 1 ? <div className='flex items-center justify-center'>
				<h1>No posts available</h1>
			</div> : <ul className='flex flex-col items-center space-y-4'>
				{feeds.map((post) => (
					<li
						className='w-full max-w-[30rem] flex flex-col gap1 shadow-[0_0_.5rem_.2rem_#cfcfcf] rounded-lg'
						key={post._id}
					>
						<div className='flex items-center gap-2 px-4 py-2 border-b'>
							<img src={post.author?.avatar.url ? post.author.avatar.url : '/user.svg'} alt="" className='h-12 w-12 rounded-full border border-slate-400' /> <div>
								<h2>{post.author?.username}</h2>
							</div>
						</div>
						{(
							<div className='h-[25rem] w-full'>
								<img
									src={post.media.url ? post.media.url : '/post.webp'}
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
						)}
						<div className='p-4 text-md font-medium'>
							<p>{post.body}</p>
						</div>
						{/* <div className='grid grid-cols-3 px-2 text-left'>
							<span>
								{post.views}{' '}
								<FontAwesomeIcon icon={faHeart} color='red' />
							</span>
							<span>
								{post.views} <FontAwesomeIcon icon={faEye} />
							</span>
							<span>
								30{' '}
								<FontAwesomeIcon
									icon={faMessage}
									color='blue'
								/>
							</span>
						</div>
						<div className='grid grid-cols-2 mb-2'>
							<button className='w-full py-1 hover:bg-slate-200 rounded-md'>
								<FontAwesomeIcon
									icon={faThumbsUp}
									color={'blue'}
								/>{' '}
								Like
							</button>
							<button className='w-full py-1 hover:bg-slate-200 rounded-md'>
								Comment
							</button>
						</div> */}
					</li>
				))}
			</ul>}
		</div>
	);
};

export default HomeFeedPosts;
