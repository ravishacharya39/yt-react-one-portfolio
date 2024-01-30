import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import react from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Experience = () => {
    const Experience=[
        {
            id:1,
            src:HTML,
            title:'HTML',
            style:'shadow-orange-500'

        },
        {
            id:2,
            src:CSS,
            title:'CSS',
            style:'shadow-blue-500'

        },
        {
            id:3,
            src:JavaScript,
            title:'JavaScript',
            style:'shadow-yellow-500'

        },
         {
            id:4,
            src:react,
            title:'React JS',
            style:'shadow-blue-600'

        },
         {
            id:5,
            src:Github,
            title:'Github',
            style:'shadow-orange-500'

        },
         {
            id:5,
            src:Tailwind,
            title:'Tailwind',
            style:'shadow-gray-500'

        },
        

    ]
  return (
    <div name="Experience" className="bg-gradient-to-b from-gray-800 to-black w-full h-screen">

       <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
            <div>
                <p className="text-4xl font-bold border-b-4 inline border-gray-500 p-2">Experience</p>
                <p className='py-6'>These are the Technologies i've worked with</p>
            </div>

            <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

            {Experience.map(({id,src,title,style})=>(
                    <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt=""  className="w-20 mx-auto"/>
                    <p className-="mt-4">{title}</p>
                    </div>
            ))}
                
            </div>
       </div>
    </div>
  )
} 

export default Experience; 