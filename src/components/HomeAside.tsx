import React from 'react';

const HomeAside = () => {
	return (
		<div className='flex flex-col sticky top-16 py-4 h-[calc(100vh_-_4rem)] border-l-[1px] px-4 gap-2'>
			{/* Friend requests */}
			<div className='h-2/5 overflow-y-scroll'>
				<h2>Friend requests</h2>
				<hr />
				<ul className='py-2'>
					{[1, 2, 3].map((friend,index) => (
						<li className='flex items-center gap-2 border-b py-1' key={index}>
							<div className='h-12 w-12 rounded-full overflow-hidden'>
								<img
									src='/girl4.webp'
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='flex items-center'>
								<h2>Jane Doe</h2>
							</div>
						</li>
					))}
				</ul>
			</div>
			{/* Friends */}
			<div className='h-3/5 overflow-y-scroll'>
				<h2>Friends</h2>
				<hr />
				<ul className='py-2'>
					{[1, 2, 3].map((friend,index) => (
						<li className='flex items-center gap-2 border-b py-1' key={index}>
							<div className='h-12 w-12 rounded-full overflow-hidden'>
								<img
									src='/girl4.webp'
									alt=''
									className='w-full h-full object-cover'
								/>
							</div>
							<div className='flex items-center'>
								<h2>Jane Doe</h2>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default HomeAside;
