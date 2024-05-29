import React from 'react'
import htmlImage from '../assets/html.png'
import cssImage from '../assets/css.png'
import javascriptImage from '../assets/javascript.png'
import reactImage from '../assets/react.png'
import nextjsImage from '../assets/nextjs.png'
import graphqlImage from '../assets/graphql.png'
import githubImage from '../assets/github.png'
import tailwindImage from '../assets/tailwind.png'


function Experience() {

    const technologies = [
        {
            id: 1,
            name: 'HTML',
            src: htmlImage,
            style:'shadow-orange-500'
        },
        {
            id: 2,
            name: 'CSS',
            src: cssImage,
            style:'shadow-blue-500'
        },
        {
            id: 3,
            name: 'Javascript',
            src: javascriptImage,
            style:'shadow-yellow-500'
        },
        {
            id: 4,
            name: 'React',
            src: reactImage,
            style:'shadow-blue-600'
        },
        {
            id: 5,
            name: 'NextJS',
            src: nextjsImage,
            style:'shadow-white'
        },
        {
            id: 6,
            name: 'GraphQL',
            src: graphqlImage,
            style:'shadow-pink-400'
        },
        {
            id: 7,
            name: 'Github',
            src: githubImage,
            style:'shadow-gray-400'
        },
        {
            id: 8,
            name: 'Tailwind',
            src: tailwindImage,
            style:'shadow-sky-400'
        },
    ]

  return (
    <div name='experience' className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Experience</p>
                <p className='py-6'>These are the technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {technologies.map(({id, name, src, style}) => (
                    <div key={id} className={'shadow-md hover:scale-105 duration-500 py-2 rounded-lg' + ' ' + style}>
                        <img src={src} alt="" className='w-20 mx-auto'/>
                        <p className='mt-4'>{name}</p>
                    </div>
                ))}
            
            
            </div>
        </div>
    </div>
  )
}

export default Experience