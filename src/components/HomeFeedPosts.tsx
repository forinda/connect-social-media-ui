import { faHeart, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useAppSelector } from 'state/hooks';
import moment from "moment"
import React from 'react';
import { IFeed } from 'state/types';
import { baseAxios } from 'api';

const HomeFeedPosts = () => {
	const { feeds } = useAppSelector((state) => state.feeds);

	return (
		<div className='w-full md:p-4'>
			{feeds.length < 1 ? <div className='flex items-center justify-center'>
				<h1>No posts available</h1>
			</div> : <ul className='flex flex-col items-center space-y-4'>
				{feeds.map((post) => (<HomePost post={post} key={post._id} />)
				)}
			</ul>}
		</div>
	);
};

export default HomeFeedPosts;

const HomePost = ({ post }: { post: IFeed }) => {
	const { accessToken } = useAppSelector(state => state.root.auth)
	const [liked, setIsLiked] = React.useState<boolean>(false)
	const [count, setCount] = React.useState<number>(post.likes)
	const handleLike = (e: React.MouseEvent<HTMLButtonElement>) => {
		baseAxios.post(`/like/${post._id}`, {

		}, {
			headers: {
				authorization: `Bearer ${accessToken}`
			}
		}).then((res) => res.data).then(data => {
			data && setIsLiked(true)
			// window.location.reload()
			setCount(count + 1)
		}).catch(err => {
			console.log(err);

		})
	}
	return <li
		className='w-full max-w-[30rem] flex flex-col gap1 shadow-[0_0_.5rem_.2rem_#cfcfcf] rounded-lg'
		key={post._id}
	>
		<div className='flex items-center gap-2 px-4 py-2 border-b'>
			<img src={post.author?.avatar ? post.author.avatar : '/user.svg'} alt="" className='h-12 w-12 rounded-full border border-slate-400' /> <div>
				<h2>{post.author?.username}</h2>
			</div>
		</div>
		{(
			<div className='h-[25rem] w-full'>
				<img
					src={post.media ? post.media : '/post.webp'}
					alt=''
					className='w-full h-full object-contain'
				/>
			</div>
		)}
		<div className='p-4 text-md font-medium'>
			<p>{post.body}</p>
		</div>
		<div className='flex justify-between items-center px-4 py-2'>
			<div className='flex items-center gap-2'>
				<button disabled={liked} onClick={handleLike} className='flex items-center'>
					<FontAwesomeIcon icon={faThumbsUp} color="blue" />
					<FontAwesomeIcon icon={faHeart} color="red" />
				</button>
				<span>{count}</span>
			</div>
			<div>{moment(post.createdAt!).fromNow()}</div>
		</div>
	</li>

}
