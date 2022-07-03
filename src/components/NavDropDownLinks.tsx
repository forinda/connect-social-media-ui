import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { links } from 'data/links';
import React from 'react';
import { Link } from 'react-router-dom';
import { useAppDispatch } from 'state/hooks';
import { logout } from 'state/slices/authSlice';
import { unsetUser } from 'state/slices/userSlice';

const NavDropDownLinks = () => {
	const dispatch = useAppDispatch();
	return (
		<div className='hidden absolute group-focus:flex group-hover:flex flex-col-reverse top-[100%] rounded-md border py-4 h-fit border-r-[1px] px-4 gap-2 left-0 bg-white'>
			<div>
				<button
					className='p-1 bg-red-400 w-full'
					onClick={(e) => {
						e.preventDefault();
						dispatch(unsetUser());
						dispatch(logout());
					}}
				>
					Logout
				</button>
			</div>
			<hr />
			{/* Quick links */}
			<div className=''>
				<ul className='flex flex-col gap-2'>
					{links.sidebar.map((link) => (
						<li key={link.id}>
							<Link
								to={link.path}
								className='w-full flex items-center py-1 px-2 rounded-md gap-2 hover:bg-slate-300 text-md '
							>
								<FontAwesomeIcon icon={link.icon} /> {link.title}
							</Link>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default NavDropDownLinks;
