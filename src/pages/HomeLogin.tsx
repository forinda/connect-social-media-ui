import { loginFields } from 'data/accountForms'
import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
type HomeLoginPageType = {
  page:HomepageTypes['page'],
  setPage:HomepageTypes['setPage']
}
const HomeLogin = ({setPage}:HomeLoginPageType) => {
  return (
    <div className='grid grid-cols-2'>
    <div className='flex justify-center items-center'>
      <img src="/bg-home.svg" alt="" className='h-full w-full object-cover' />
    </div>
    <div className='h-screen bg-blue-700 p-10 flex flex-col gap-6 justify-center items-center'>
      <form action="" className='flex flex-col gap-5 w-full'>
        {
          loginFields.map((field) => (
            <div className='flex flex-col w-full' key={field.name}>
              <label htmlFor={field.name} className='text-white font-bold text-xl'>{field.label}</label>
              <input {...field} className="focus:right-0 border rounded-sm" />
            </div>
          ))
        }

        <div>
          <button className='px-16 bg-orange-600 text-lg font-bold py-3 rounded-3xl text-white' type='submit' onClick={e => {
          }}>Login</button>
        </div>
      </form>
      <div>
        <p className='text-xl text-white'>Don't have an account? <button className='text-blue-200' onClick={e => {
          setPage("register")
        }}>Create free account</button></p>
      </div>
    </div>
  </div>
  )
}

export default HomeLogin