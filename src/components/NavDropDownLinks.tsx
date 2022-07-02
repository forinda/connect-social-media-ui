import {
	faHome,
	faUsers,
	faUser,
	faUsersCog,
	faFeed,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const NavDropDownLinks = () => {
	return (
		<div className='hidden absolute group-focus:flex group-hover:flex flex-col-reverse top-[100%] rounded-md border py-4 h-fit border-r-[1px] px-4 gap-2 left-0 bg-white'>
			<div>
				<button className='p-1 bg-red-400 w-full'>Logout</button>
			</div>
			<hr />
			{/* Quick links */}
			<div className=''>
				<ul className='flex flex-col gap-2'>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faHome} /> Home
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faUsers} /> Friends
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faUser} /> Profile
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faUsersCog} /> Followers
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faUsersCog} /> Followings
						</Link>
					</li>
					<li>
						<Link
							to={'/'}
							className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
						>
							<FontAwesomeIcon icon={faFeed} /> Posts
						</Link>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default NavDropDownLinks;
