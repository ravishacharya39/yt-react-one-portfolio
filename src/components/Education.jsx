import React from 'react'
import Alvas from '../assets/portfolio/AlvasCollege.jpg'
import SVH from '../assets/portfolio/SVHPUCollegeInnanje.jpg'
import StJohns from '../assets/portfolio/St.Johns.png'


const Education = () => {
  const Education=[
    {
      id:1,
      education: Alvas,
      href:"https://en.wikipedia.org/wiki/Alva%27s_Institute_of_Engineering_and_Technology"
    },
    {
      id:2,
      education: SVH,
      href:"https://schools.org.in/udupi/29160203502/s-v-h-pu-college-innanje.html"
    },
    {
      id:3,
      education: StJohns,
      href:"https://stjohnsshankerpura.org/"
    },
]
  return (
    <div name="Education" className="bg-gradient-to-b from-black to-gray-800 text-white w-full md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">

        <div className="pb-8">
            <p className="text-4xl font-bold border-b-4 inline border-gray-500">Education</p>
            <p className="py-6">Here's Some My Journey Of Education</p>
        </div>

        
          <div  className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:p-0 px-12">

                    {Education.map(({id,education,href})=>(
                    <div key={id}className="shadow-md shadow-gray-600 rounded-lg">
                      <img src={education} alt="" className="rounded-md duration-200 hover:scale-105" />
                      <div className="flex items-center justify-center">
                          {/* <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 '>Demo</button> */}
                          <a href={href}  target="_blank" rel="noreferrer"><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>MORE</button></a>
                      </div>
                    </div>
                     ))}
        </div>

      </div>
    </div>
  )
}

  
export default Education;   