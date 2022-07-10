import React from 'react'
import { Outlet } from 'react-router-dom'

const UserChats = () => {
  return (
    <div className='flex'>
        <div className='w-80 border-r h-[calc(100vh_-_4rem)]'>
         <h1>User chats</h1>
        </div>
        <div className='w-full p-4'>
            <Outlet/>
        </div>
        <div className='w-72 border-l p-4'>
            <h2>Online friends</h2>
        </div>
    </div>
  )
}

export default UserChats

// amosyss  banking system -> Julius Eucossa