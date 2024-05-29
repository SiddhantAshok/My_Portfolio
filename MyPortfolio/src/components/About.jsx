import React from 'react'

function About() {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
                <p className='text-xl mt-20'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio nemo dignissimos fugiat ipsa non maiores fuga quod est rem nobis. 
                    Voluptate obcaecati ut soluta alias consequatur quae quis officiis iste! Eius enim id praesentium aspernatur nihil quisquam laborum non?
                     Neque quam labore ea commodi delectus eius exercitationem illo nisi ad.
                </p>
                <br />

                <p className='text-xl'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam ex tempora possimus aliquam, iure placeat modi commodi vitae laborum! 
                    Et placeat, in, quod magnam voluptatum, totam autem earum dolore iste perferendis ab rem! Aperiam totam odio fugit tenetur sed 
                    veritatis repellat, dolore adipisci iusto veniam, voluptatum et aspernatur amet accusamus!
                </p>
            </div>
    </div>
  )
}

export default About