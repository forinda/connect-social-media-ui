import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom';
import { faBars, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import NavDropDownLinks from './NavDropDownLinks';
import { useAppSelector } from 'state/hooks';
const Header = () => {
	const { user } = useAppSelector(state => state.root)
	return (
		<div className='h-16 shadow-xl flex items-center justify-between px-1 md:px-4 sticky top-0 bg-white z-[1020]'>
			<div className='flex gap-2'>
				<Link to={'/'}>
					<div className='hidden sm:flex items-center gap-1'>
						<img
							src='/logo512.png'
							alt=''
							className='w-8 h-8 md:w-10 md:h-10 object-cover rounded-full '
						/>
					</div>
				</Link>
				<div className='flex items-center md:hidden group relative px-4'>
					<FontAwesomeIcon icon={faBars} className="peer" size='lg' />
					<NavDropDownLinks />
				</div>
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
				<div className='flex items-center'>
					<Link to={'profile'}>
						<img
							src={(user.avatar as any).url! ? (user.avatar as any).url! : '/user.svg'}
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
