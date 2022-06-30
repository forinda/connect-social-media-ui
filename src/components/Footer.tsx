import React from 'react'

const Footer = () => {
    return (
        <div className=''>
            {/* Getting started */}
            <div className='grid md:grid-cols-2'>
                <div className='flex flex-col justify-center gap-4 p-4 bg-blue-400 h-96'>
                    <h1 className='text-4xl font-bold text-white'>Watch our starter video</h1>
                    <p className='text-white text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, doloremque illo deserunt repudiandae odit ab quia totam saepe. Iste eos fugiat est esse consectetur perferendis veniam eaque similique unde expedita nobis doloribus, libero quidem consequuntur ad fugit excepturi voluptatibus incidunt?</p>
                </div>
                <div className='h-96'>
                    {/* Intro video */}
                    <video src="https://res.cloudinary.com/forinda/video/upload/v1656578791/video_jaxgsx.mp4" loop autoPlay controls controlsList={"play"} className='w-full h-full object-cover' ></video>
                </div>

            </div>
            <div className='p-10'>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolores praesentium sint tempora doloribus excepturi. Ex odit harum eum maxime soluta vitae officia et quos provident! Nam eaque nulla obcaecati dolor.</p>
            </div>
        </div>
    )
}

export default Footer