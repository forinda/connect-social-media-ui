import React from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'

const links = [
    {
        id: 1,
        title: 'About',
        link: '/profile',

    }, {
        id: 2,
        title: 'Timeline',
        link: '/profile/posts',

    }, {
        id: 3,
        title: 'Followers',
        link: '/profile/followers',

    }, {
        id: 4,
        title: 'Followings',
        link: '/profile/followings',

    }
]
const Profile = () => {
    const location = useLocation().pathname
    return (
        <div className='max-w-7xl mx-auto'>
            <div>
                <div className='h-[10rem] relative md:h-[16rem] bg-black bg-opacity-30 z-10'>
                    <img src="/connect.webp" alt="" className='w-full h-full object-cover -z-[1]' />
                    <img src="/girl4.webp" alt="" className='w-32 h-32 rounded-full mx-auto absolute bottom-0 border-4 left-4 md:h-48 md:w-48' />
                </div>
                <div className='p-4'>
                    <h2 className='text-2xl font-bold'>Jane Doe</h2>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <div className='flex gap-3'>
                        <p className='flex items-center'><span className='font-bold  rounded-full p-[4px] text-white bg-black text-[12px] text-center'>2k </span> followers</p>
                        <p className='flex items-center'><span className='font-bold  rounded-full p-[4px] text-white bg-black text-[12px] text-center'>50 </span> followings</p>
                    </div>
                </div>
            </div>
            <div className='flex border-b border-slate-300 gap-4 py-1 text-center'>
                {
                    links.map((link) => (
                            <Link to={link.link} className={`w-full h-full p-1 ${location === link.link&&'bg-blue-500 text-white'}`}>{link.title}</Link>
                    ))
                }
            </div>
            <div className='p-4'>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile