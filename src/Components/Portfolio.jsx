import React from 'react'
import p1 from '../Asset/p1.png'
import p2 from '../Asset/p2.png'
const Portfolio = () => {
 const portfolios = [
    {
        id:1,
        src: p1,
        demoLink:'https://capable-hotteok-fbb19e.netlify.app/',
        codeLink:'https:github.com/preyashi133'
       
    },
    {
        id:2,
        src: p2,
        demoLink:'https://cute-baklava-e286c6.netlify.app',
        codeLink:'https:github.com/preyashi133'
    },
 ]

 return (
    <div
      name="Portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-clip-text">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,demoLink,codeLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
              <a href={demoLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> </a>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button> </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Portfolio