import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'data/links';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'state/hooks';
import { logout } from 'state/slices/authSlice';
import { unsetUser } from 'state/slices/userSlice';

const HomeSidebar = () => {
	const dispatch = useAppDispatch();
	const { username, avatar } = useAppSelector((state) => state.root.user);
	return (
		<div className='flex flex-col sticky top-16 py-4 h-[calc(100vh_-_4rem)] border-r-[1px] px-4 gap-2'>
			{/*profile  */}
			<div className='flex items-center bg-slate-700 bg-opacity-10 px-2 py-2 rounded-lg gap-2'>
				<div className='w-12 h-12 rounded-full overflow-hidden'>
					<img
						src={avatar.url ? avatar.url! : '/user.svg'}
						alt=''
						className='w-full h-full bg-white  object-cover'
					/>
				</div>
				<div>
					<h2>{username}</h2>
				</div>
			</div>

			<hr />
			{/* Quick links */}
			<div className=''>
				<ul className='flex flex-col gap-2'>
					{links.sidebar.map((link) => (
						<li key={link.id}>
							<Link
								to={link.path}
								className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-xl '
							>
								<FontAwesomeIcon icon={link.icon} /> {link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
			<hr />
			<div>
				<button
					className='py-2 text-white bg-red-400 w-full rounded-lg'
					onClick={(e) => {
						e.preventDefault();
						dispatch(unsetUser());
						dispatch(logout());
					}}
				>
					Logout
				</button>
			</div>
		</div>
	);
};

export default HomeSidebar;
