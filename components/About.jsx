import Image from 'next/image'
import React from 'react'
import ProfileImage from '..//public/assets/profile.png.jpg'

const About = () => {
  return (
    <div className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-{1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>// I am not your normal developer</p>
          <p className='py-2 text-gray-600'>I have extensive experience in law enforcement and security but I have always been tech-savvy and enjoyed working wih computers.  In 2021 I decided to make a career change and enrolled in the University of Utah's full-stack web developer bootcamp.  After graduating I was quickly drawn to learn more.  I started learning things like Tailwindcss, NextJS, and others.  I now spend my free time building interactive websites based on my formal and individual education.</p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my projects.</p>
        </div>
        <div  className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300 cursor-pointer' >
          <Image
          className='rounded-xl'
           src={ProfileImage}
           alt=''
          /> 
            
        
        </div>
      </div>
    </div>
  )
}

export default About