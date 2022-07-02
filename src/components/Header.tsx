import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faBell } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'
import { faFeed, faSearch } from '@fortawesome/free-solid-svg-icons'
const Header = () => {
    return (
        <div className='h-16 shadow-xl flex items-center justify-between px-4 sticky top-0 bg-white z-[1020]'>
            <div>
                <div className='flex items-center gap-1'><img src="/logo512.png" alt="" className='w-12 h-12 object-cover rounded-full' />
                    <p className='uppercase font-bold'>Connect</p>
                </div>
            </div>
            <div>
                <ul className='flex items-center gap-2'>

                    <li><Link to={"/"}><FontAwesomeIcon icon={faFeed}/> Feeds</Link></li>
                    <li><Link to={"/"}> <FontAwesomeIcon icon={faSearch}/>Discover</Link></li>
                </ul>
            </div>
            <div className='flex gap-4 items-center'>
                {/* <div className='relative '>
                    <FontAwesomeIcon icon={faBell} size="lg"/>
                    <span className='h-4 w-4 bg-red-500 text-white rounded-full p-[2px] text-[10px] absolute -top-[10px] -right-3'>20</span>
                </div> */}
                <div>
                    <Link to={"profile"}>
                    <img src="/girl4.webp" alt="" className='w-12 h-12 rounded-full' />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Header