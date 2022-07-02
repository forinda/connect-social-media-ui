import React from 'react'
import { useAppSelector } from 'state/hooks'

const ProfileAbout = () => {
  const { user } = useAppSelector(state => state.root)
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(18rem,1fr))]'>
      {
        Object.entries(user).map(([key, value], index) => (
          key.toLowerCase() !== 'avatar' && (<div key={index} className="w-full p-2 flex flex-col">
            <div className='capitalize font-bold'>{key}</div>
            <div className=' p-2 rounded-lg bg-slate-300'>{value?value:"Not set"}</div>
          </div>)
        ))
      }
    </div>
  )
}

export default ProfileAbout