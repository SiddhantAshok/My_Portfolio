// import React from "react";
// import HeroImage from "../assets/heroImage.png";
// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";

// function Home() {
//   return (
//     <div
//       name="home"
//       className="h-screen bg-gradient-to-b from-black via-black to-gray-800"
//     >
//       <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
//         <div className="mr-auto place-self-center lg:col-span-7">
//           <h2 className="text-4xl sm:text-7xl font-bold text-white">
//             I'm a Full Stack Developer
//           </h2>
//           <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
//             I have 3 years of experience building and designing software.
//             Currently, I love to work on web applications using technologies
//             like React, Tailwind, Next JS, and GraphQL.
//           </p>

//           <div className="flex justify-center md:justify-start">
//             <Link
//               to="portfolio"
//               smooth
//               duration={500}
//               className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
//             >
//               Portfolio
//               <span className="group-hover:rotate-90 duration-300">
//                 <MdOutlineKeyboardArrowRight size={21} />
//               </span>
//             </Link>
//           </div>
//         </div>

//         <img
//           src={HeroImage}
//           alt="my profile"
//           className="rounded-2xl mx-auto w-2/3 md:w-full"
//         />
//       </div>
//     </div>
//   );
// }

// export default Home;

import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

function Home() {
  return (
    <div
      name="home"
      className=" flex flex-col items-center justify-center h-screen bg-gradient-to-b from-black via-black to-gray-800 sm:pt-20"
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl p-5 md:p-10">
        <div className="flex-1 text-center md:text-left mb-8 md:mb-0">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Full Stack Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md mx-auto md:mx-0">
            I have 3 years of experience building and designing software.
            Currently, I love to work on web applications using technologies
            like React, Tailwind, Next JS, and GraphQL.
          </p>
          <h1 className="text-2xl md:text-2xl font-bold text-indigo-600 dark:text-indigo-600 inline-block"></h1>
        </div>
        <div className="self-center">
          <img
            src={HeroImage}
            alt="Profile"
            className="rounded-full w-40 h-40 md:w-60 md:h-60 lg:w-80 lg:h-80 border-4 border-white dark:border-gray-900"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
