import React from 'react';
import PortfolioCard from './PortfolioCard';

function Portfolio() {
  return (
    <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6 md:py-8'>Check out some of my work right here</p>
        </div>

        <div>
          {/* <PortfolioCard /> */}
        </div>

      </div>
    </div>
  );
}

export default Portfolio;


// import React from 'react'
// import PortfolioCard from './PortfolioCard'



// function Portfolio() {
   
//   return (
//     <div name='portfolio' className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen border-red-500 border-4 '>
//         <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
//             <div className='pb-8'>
//                 <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
//                 <p className='py-6'>Check out some of my work right here</p>
//             </div>

//             <PortfolioCard />

//         </div>
//     </div>
//   )
// }

// export default Portfolio