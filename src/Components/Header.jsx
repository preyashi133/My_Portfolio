import React, { useState } from 'react'
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from 'react-scroll'
import Image from '../Asset/P_logo.png';

const Header = () => {
    const [head , setHead] = useState(false);

    const links = [
    {
        id:1, link:'Home',
    },
    {
        id:2, link:'About',
    },
    {
        id:3, link:'Portfolio',
    },
    {
        id:4, link:'Experience',
    },
    {
        id:5, link:'Contact',
    },
   
]
  return <div className='flex justify-between items-center h-20 w-full bg-black text-white px-4 fixed ' >
   {/* <div className='text-4xl ml-2 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text'>PREYASHI PATEL</div> */}
   <img src={Image} alt="my profile" className="w-[70px]"/>

    <ul className='hidden md:flex'>
        {links.map(({id, link}) => (
        <li key={id} className='px-4 cursor-pointer font-medium text-gray-500 hover:scale-105 duration-200'>
            <Link to={link} smooth duration={500}> {link} </Link> </li>
    ))}   
    </ul>
    <div onClick={()=> setHead(!head)} className='cursor-pointer pr-4 z-10 text-gray-50 md:hidden'> 
    {head ? <FaTimes size={30} /> : <FaBars size={30} /> }  </div>
    {head && (
         <ul className='flex flex-col justify-center items-center top-0 left-0 w-full h-screen absolute bg-gradient-to-b from-black to-gray-800 text-gray-500'>
         {links.map(({id,link}) => (
             <li key={id} className='px-4 cursor-pointer py-6 text-4xl'>
             <Link onClick={() => setHead(!head)} to={link} smooth duration={500}> {link} </Link> </li>
         ))}
     </ul>
    )}
    </div> 
}

export default Header