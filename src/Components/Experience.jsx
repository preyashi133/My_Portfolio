import React from 'react'
import html from '../Asset/html.png'
import css from '../Asset/css.png'
import javascript from '../Asset/javascript.png'
import nextjs from '../Asset/nextjs.png'
import github from '../Asset/github.png'
import reactimage from '../Asset/react.png'
import tailwind from '../Asset/tailwind.png'
import aws from '../Asset/AWS.png'
import java from '../Asset/Java.png'
import node from '../Asset/node.png'
import php from '../Asset/php.png'
import mysql from '../Asset/mysql.png'

const Experience =()=> {
    const pictures=[
    {
        id:1,
        src:html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src:css,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src:javascript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        src:reactimage,
        title:'React',
        style:'shadow-cyan-400'
    },
    {
        id:5,
        src: nextjs,
        title:'Next JS',
        style:'shadow-white'
    },
    {
        id:6,
        src:node,
        title:'Node JS',
        style:'shadow-green-700'
    },
    {
        id:7,
        src:tailwind,
        title:'Tailwind',
        style:'shadow-teal-300'
    },
    {
        id:8,
        src:mysql,
        title:'MySQL',
        style:'shadow-blue-700'
    },
    {
        id:9,
        src:java,
        title:'Java',
        style:'shadow-orange-500'
    },
    {
        id:10,
        src:php,
        title:'PHP',
        style:'shadow-indigo-400'
    },
    {
        id:11,
        src:aws,
        title:'AWS',
        style:'shadow-amber-600'
    },
    {
        id:12,
        src:github,
        title:'Github',
        style:'shadow-white'
    }
]

  return (
    <div name="Experience" className='bg-gradient-to-b from-gray-800 to-black w-full '>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-clip-text'> Skills </p>
                <p className='py-6'> These are the skills I have worked with </p>
            </div>
            
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 px-12 py-8 sm:px-0'>
            {
                pictures.map(({id,src,title,style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-leg ${style}  flex flex-col items-center`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4 items-center'> {title} </p>
                </div>
                ))
            }
                
            </div>
        </div>
    </div>
  )
}

export default Experience