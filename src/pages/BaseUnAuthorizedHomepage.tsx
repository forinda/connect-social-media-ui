import { HomepageTypes } from 'helpers/HomeSwitcher'
import React from 'react'

type HomePageType = {
    page: HomepageTypes['page'],
    setPage: HomepageTypes['setPage']
}
const BaseUnAuthorizedHomepage = ({ setPage }: HomePageType) => {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='hidden md:flex justify-center items-center'>
                <img src="/connect.webp" alt="" className='h-full w-full object-cover' />
            </div>
            <div className='h-screen bg-[dodgerblue] p-10 flex flex-col gap-6 justify-center'>
                <h1 className='text-5xl text-white'>Welcome to connect</h1>
                <p className='text-2xl text-white'>The new social platform for freedom of expression</p>
                <div>
                    <button className='px-16 bg-[purple] text-xg font-bold py-3 rounded-3xl text-white' onClick={e => {
                        setPage("register")
                    }}>Get started</button>
                </div>
            </div>
        </div>
    )
}

export default BaseUnAuthorizedHomepage