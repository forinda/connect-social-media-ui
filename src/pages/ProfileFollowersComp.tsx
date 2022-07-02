import React from 'react'

type FollowProps ={
    follows:Array<number>
}
const ProfileFollowersComp = ({follows}:FollowProps) => {
  return (
    <div className='flex flex-col p-4 items-center space-y-4'>
    {follows.map((state) => (
        <div className='shadow-[0_0_.5rem_.2rem_#a2a4a6dc] p-4 rounded-md'>
            <div className='flex items-center gap-4'>
                <div>
                    <img
                        src='/girl4.webp'
                        alt=''
                        className='w-20 h-20 rounded-full'
                    />
                </div>
                <div>
                    <h2>Jane Doe</h2>
                    <div>
                        <span>2k</span>
                    </div>
                </div>
            </div>
            <p className='max-w-[60ch]'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Pariatur rem veniam optio facere modi, esse nostrum.
            </p>
        </div>
    ))}
</div>
  )
}

export default ProfileFollowersComp