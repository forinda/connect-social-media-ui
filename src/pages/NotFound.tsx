import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-full w-full bg-white flex flex-col justify-center items-center gap-4 p-6'>
        <h1 className='text-xl'>Page not found</h1>
        <p>Go back to <Link to={'/'} className="text-blue-600">Homepage</Link></p>
    </div>
  )
}

export default NotFound