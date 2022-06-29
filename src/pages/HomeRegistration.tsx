import { registerForm } from 'data/accountForms'
import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'
type HomeRegisterPageType = {
  page: HomepageTypes['page'],
  setPage: HomepageTypes['setPage']
}
const HomeRegistration = ({ setPage }: HomeRegisterPageType) => {
  return (
    <div className='grid grid-cols-2'>
      <div className='flex justify-center items-center'>
        <img src="/bg-home.svg" alt="" className='h-full w-full object-cover' />
      </div>
      <div className='h-screen bg-blue-700 p-10 flex flex-col gap-6 justify-center items-center'>
        <form action="" className='flex flex-col gap-5 w-full'>
          {
            registerForm.map((field) => (
              <div className='flex flex-col w-full'>
                <label htmlFor={field.name} className='text-white font-bold text-xl'>{field.label}</label>
                <input {...field} className="focus:right-0 border rounded" />
              </div>
            ))
          }

          <div>
            <button className='px-16 bg-orange-600 text-xg font-bold py-3 rounded-3xl text-white' onClick={e => {
              setPage("register")
            }}>Create free account</button>
          </div>
        </form>
        <div>
          <p className='text-center text-xl text-white'>Already have an account? <button className='text-blue-200' onClick={e => {
            setPage("login")
          }}>Sign in </button></p>
        </div>
      </div>
    </div>
  )
}

export default HomeRegistration