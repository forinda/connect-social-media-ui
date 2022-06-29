import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Profile = () => {
    return (
        <div>
            <h1>Hello to profile x</h1>
            <ul className='flex'>
                <li><Link to={'/profile'}>About</Link></li>
                <li><Link to={'/profile'}>Timeline</Link></li>
                <li><Link to={'/profile'}>Posts</Link></li>
                <li><Link to={'/profile'}>Folwers</Link></li>
            </ul>
            <div>
                <Outlet />
            </div>
        </div>
    )
}

export default Profile