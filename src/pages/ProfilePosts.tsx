import React from 'react'
import { useAppSelector } from 'state/hooks'

const ProfilePosts = () => {
  const { personalPosts: { feeds }, root: { user } } = useAppSelector(state => state)

  return (
    <div className='flex flex-col gap-4 items-center'>
      {feeds.map((blog) => (
        <div className=' w-full md:w-[40rem] shadow-[0_0_.5rem_.3rem_#cecece] rounded-md overflow-hidden' key={blog._id}>
          {/* User */}
          <div className='flex gap-4 items-center px-4 py-1 border-b'>
            <div>
              <img src={blog.author?.avatar ? blog.author?.avatar : '/user.svg'} alt="" className='h-16 w-16 rounded-full' />
            </div>
            <div>
              <h2>{user.username}</h2>
            </div>
          </div>
          {/* Image iff */}
          <div className='w-full h-[30rem]'>
            <img src={blog.media.url?blog.media.url:'/post.webp'} alt="" className=' h-full object-cover' />
          </div>
          {/* post body iff */}
          <div>
            <p className='p-4'>{blog.body}</p>
          </div>
          {/* Quick actions */}
          <div></div>
        </div>))}
    </div>
  )
}

export default ProfilePosts