import React from 'react'

function Contact() {
  return (
    <div name="Contact" className='w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
       <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500  bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-clip-text '> Let's Connect </p>
            <p className='py-6'> I'm actively seeking new opportunities, and my inbox is open for any inquiries or simply to connect. 
                                 Whether you have questions or just want to say hi, feel free to reach out—I'll do my utmost to respond
                                 promptly and engage with you!</p>
        </div>
        <div className='flex justify-center items-center'>
            <form action="https://getform.io/f/qaloemnb" method="POST" className='flex flex-col w-full md:w-1/2  '> <input type="text" name="name" placeholder="Enter your name" className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' /> 
            <input type="text" name="email" placeholder="Enter your email" className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' /> 
            <textarea name="message" rows="10" placeholder="Let's talk about..." className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>
            <button className='bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-5 mx-auto flex items-center rounded-md hover:scale-110 duration-200 '> Send Message </button>
            </form>
        </div>
    </div>
</div>
  )
}

export default Contact