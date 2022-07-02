import React from 'react'

const ProfileFollowers = () => {
  return (
    <div className='flex flex-col p-4'>
      {[1, 2, 3, 4, 5, 6].map(state => (<div>
        <div className='flex items-center gap-4'>

          <div>
            <img src="/girl4.webp" alt="" className='w-20 h-20 rounded-full' />
          </div>
          <div>
            <h2>Jane Doe</h2>
            <div>
              <span>2k</span>
            </div>
          </div>
        </div>
            <p className='max-w-[60ch]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur rem veniam optio facere modi, esse nostrum.</p>
      </div>))}
    </div>
  )
}

export default ProfileFollowers