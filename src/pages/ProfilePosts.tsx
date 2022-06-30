import React from 'react'

const ProfilePosts = () => {
  return (
    <div className='flex flex-col gap-4 items-center'>
      {[1, 2, 3, 4, 5, 6].map((blog) => (
      <div className=' w-[30rem] shadow-lg' key={blog}>
        {/* User */}
        <div className='flex gap-4 items-center px-4 py-1'>
          <div>
            <img src="/girl4.webp" alt="" className='h-16 w-16 rounded-full' />
          </div>
          <div>
            <h2>Jane Doe</h2>
          </div>
        </div>
        {/* Image iff */}
        <div className='w-full h-[30rem]'>
          <img src="/girl4.webp" alt="" className=' h-full object-cover' />
        </div>
        {/* post body iff */}
        <div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit ab temporibus minus cumque dolores modi nostrum, molestias ipsa qui commodi?</p>
        </div>
        {/* Quick actions */}
        <div></div>
      </div>))}
    </div>
  )
}

export default ProfilePosts