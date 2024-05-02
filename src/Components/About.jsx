import React from "react";

const About = () => {
  return (
    <div
      name="About"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-gray-400"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-600 text-transparent bg-clip-text">
            About Me
          </p>
        </div>

        <p className="text-xl mt-15">
        I'm deeply passionate about technology and its transformative potential to address real-world challenges and enhance lives. My journey into programming and software development has been fueled by the exhilarating process 
        of turning concepts into practical solutions that positively impact individuals and communities. It's this drive 
        that led me to pursue a career in software development, where I thrive on the satisfaction of crafting innovative
        solutions from scratch and witnessing them come to life.
        </p>

        <br />

        <p className="text-xl">
        With over 2 years of experience in web development, I bring a comprehensive understanding of both front-end and 
        back-end technologies, coupled with a robust foundation in database design and server-side programming. 
        My expertise spans a range of programming languages, including HTML, CSS, JavaScript, PHP, Java as well as proficiency in frameworks like React, Angular. Additionally, I am adept at working
        with databases such as MySQL and proficient in version control systems like Git.
        </p> <br />
        <p className="text-xl">
        What sets me apart is not just my technical prowess, but also my insatiable appetite for learning and growth. 
        I am committed to staying abreast of the latest industry trends and continuously enhancing my skill set. 
        My strong communication skills, strategic mindset, and ability to adapt to evolving technologies make me a 
        valuable asset in delivering high-impact solutions.</p>
       
      </div>
    </div>
  );
};

export default About
