
import React from 'react';
import arrayDestruct from '../assets/portfolio/arrayDestruct.jpg';
import installNode from '../assets/portfolio/installNode.jpg';
import navbar from '../assets/portfolio/navbar.jpg';
import reactParallax from '../assets/portfolio/reactParallax.jpg';
import reactSmooth from '../assets/portfolio/reactSmooth.jpg';
import reactWeather from '../assets/portfolio/reactWeather.jpg';



function PortfolioCard() {
  const portfolios = [
    {
      id: 1,
      src: arrayDestruct,
    },
    {
      id: 2,
      src: installNode,
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactParallax,
    },
    {
      id: 5,
      src: reactSmooth,
    },
    {
      id: 6,
      src: reactWeather,
    },
  ];

  return (

    <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
      {portfolios.map(({ id, src }) => (
        <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
          <img
            src={src}
            alt=''
            className='rounded-md duration-200 hover:scale-105 w-full h-48 object-cover'
          />
          <div className='flex items-center justify-center'>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
              Demo
            </button>
            <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>

              Code
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PortfolioCard;
