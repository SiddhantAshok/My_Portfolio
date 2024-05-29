import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

function Home() {
  return (
    <div name="home" className='h-screen bg-gradient-to-b from-black via-black to-gray-800'>
      <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold text-white'>
            I'm a Full Stack Developer
          </h2>
          <p className='text-gray-500 py-4 max-w-md'>
            I have 3 years of experience building and designing software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link to='portfolio' smooth duration={500} className=' group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer' >
              Portfolio
              <span className='group-hover:rotate-90 duration-300'>
              <MdOutlineKeyboardArrowRight size={21} />
              </span>
            </Link>
          </div>
        </div>

        <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto 2-3/4 md:w-full'/>
      </div>
    </div>
  )
}

export default Home