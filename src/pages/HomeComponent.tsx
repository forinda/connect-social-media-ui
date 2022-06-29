import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'

type HomePageType = {
  page: HomepageTypes['page'],
  setPage: HomepageTypes['setPage']
}
const HomeComponent = (props: HomePageType) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-center items-center'>
        <img src="/bg-home.svg" alt="" className='h-full w-full object-cover' />
      </div>
      <div className='h-screen bg-blue-700 p-10 flex flex-col gap-6 justify-center'>
        <h1 className='text-5xl text-white'>Welcome to connect</h1>
        <p className='text-2xl text-orange-400'>The new social platform for freedom of expression</p>
        <div>
          <button className='px-16 bg-orange-600 text-xg font-bold py-3 rounded-3xl hover:text-white'>Get started</button>
        </div>
      </div>
    </div>
  )
}

export default HomeComponent