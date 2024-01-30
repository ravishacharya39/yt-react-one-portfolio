import React, { useState } from 'react'
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'

const Navbar = () => {

  const [nav,setnav]=useState(false)

  const links =[
    {
      id:1,
      link:'Home'
    },
    {
      id:2,
      link:'about'
    },
    {
      id:3,
      link:'Education'
    },
    {
      id:4,
      link:'Experience'
    },
    {
      id:5,
      link:'Contact'
    }
  ]
  return (
    <div className='flex justify-between items-center w-full h-20 fixed px-4 text-white bg-black'>
      <div>
        <h1 className='text-5xl font-signature'>Ravish</h1>
      </div>

    
      <ul className='hidden md:flex'>
        {links.map(({id,link})=>(
        <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
          <Link to={link} smooth duration={500}>{link}</Link>
          </li>
        ))}
      </ul>

      <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
         onClick={()=>setnav(!nav)} size={30}>
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

       {nav &&(
      <ul className="flex flex-col justify-center items-center w-full h-screen top-0 left-0 absolute bg-gradient-to-b from-black to-gray-800 text-gray-500">
      
        {links.map(({id,link})=>(
        <li key={id} className='px-4 cursor-pointer capitalize py-4 text-4xl'>
        <Link to={link} onClick={()=>setnav(!nav)} smooth duration={500}>{link}</Link>
          </li>
        ))}

      </ul>
      )}
    </div>
  )}


export default Navbar;