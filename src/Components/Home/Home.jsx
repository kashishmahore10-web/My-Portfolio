import React from 'react'
import TextChange from '../TextChange'
import Avatar from "../../assets/Avatar.jpg"

const Home = () => {
    return (
        <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
            <div className='md:w2/4 md:pt-10'>
            <h1 className='text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter'>
                <TextChange />
            </h1>
            <p className='text-sm md:text-2xl tracking-tight '>
                I am a passionate web developer with experience in designing and building 
                responsive, dynamic websites. i specialize in frontend design, backend development
                using Node.js, and creating seamless user experience. Additionally, I am a competitive
                programmer skilled in c++, tacking complex challenges with efficient and optimized
                solutions.
            </p>
            <button className='mt-5 md:md-10 text-white py02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85
            duration-300 hover:scale-105 font-semiboild rounded-3xl bg-[#465697]'>
                Conatct Me
            </button>
            </div>
            <div><img className='2/5' src={Avatar} alt="" /></div>
        </div>
        
        
        

    )
}

export default Home
