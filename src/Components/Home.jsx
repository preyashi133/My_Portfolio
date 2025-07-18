import React from "react";
import Image from "../Asset/b2.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import {TypeAnimation} from 'react-type-animation';

const Home = () => {
  const backgroundImageStyle = {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };
  return (
    <div
      name="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800" style={backgroundImageStyle}
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <p className="text-xl sm:text-7xl font-bold text-white text-center bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 text-transparent bg-clip-text">
           <span className="text-5xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-clip-text"> I'm a </span></p> 
        {/*  <h3 className="text-3xl sm:text-7xl font-bold text-white"> Software Developer </h3> */}
     <TypeAnimation className=" pt-2 text-xl sm:text-6xl font-bold text-white text-center"
      sequence={[
        'Preyashi Patel',
        1000, 
        'Software Developer',
        1000,
  
      ]}
      wrapper="span"
      speed={50}
      
      repeat={Infinity} />
     <br/>

        <div> <p className="text-gray-400 py-4 text-center ">
        Transforming ideas into reality through the art of coding, sculpting the digital landscape.
            
          </p> </div> 

          <div className="flex justify-center">
            <button className="group text-white w-fit px-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 cursor-pointer">
            {/* <a href='./Resume.pdf' download="Preyashi_Resume.pdf" className="group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 cursor-pointer">
              Download CV */}
            <a className="group text-white w-fit px-3 py-2 flex items-center rounded-md bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 cursor-pointer">
               Let's walk through the resume
            {/* <span className="group-hover:rotate-90 duration-300">
            <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>  */}
              </a>
            </button>
          </div>
        </div>

         {/* <div>
          <img
            src={Image}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
  </div> */ }
      </div>
    </div>
  );
};

export default Home;
