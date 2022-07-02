import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
const Header = () => {
	return (
		<div className='h-16 shadow-xl flex items-center justify-between px-4 sticky top-0 bg-white z-[1020]'>
			<div>
				<Link to={'/'}>
					<div className='flex items-center gap-1'>
						<img
							src='/logo512.png'
							alt=''
							className='w-10 h-10 object-cover rounded-full '
						/>
						{/* <p className='uppercase font-bold hidden md:block'>Connect</p> */}
					</div>
				</Link>
			</div>
			<div className='grow-1'>
				<div className='flex items-center border px-2 py-2 rounded-[20px] '>
					<FontAwesomeIcon
						icon={faMagnifyingGlass}
						color='#a2a4a6'
						size={'lg'}
					/>{' '}
					<input
						type='search'
						className='w-full border-none outline-none focus:ring-0 py-0'
						placeholder='Search'
					/>
				</div>
			</div>
			<div className='flex gap-4 items-center'>
				<div>
					<Link to={'profile'}>
						<img
							src='/girl4.webp'
							alt=''
							className='w-12 h-12 rounded-full'
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Header;
