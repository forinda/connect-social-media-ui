import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const HomeFeedPosts = () => {
	return (
		<div className='w-full p-4'>
			<ul className="flex flex-col items-center space-y-4">
				{[1, 2, 3, 4].map((post) => (
					<li className='w-full max-w-[30rem] flex flex-col gap1 shadow-2xl'>
						<div></div>
						<div className='h-[25rem] w-full'>
                            <img src="/post.webp" alt="" className='w-full h-full object-cover' />
                        </div>
						<div className='p-2'>
							<p>
								Lorem ipsum dolor sit amet, consectetur
								adipisicing elit. Doloremque laudantium ducimus
								mollitia reprehenderit! Fugiat a nisi recusandae
								in maxime esse!
							</p>
						</div>
						<div className='grid grid-cols-2'>
							<button className='w-full py-1'><FontAwesomeIcon icon={faThumbsUp} color={"blue"}/> Like</button>
							<button className='w-full py-1'>Comment</button>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default HomeFeedPosts;
