import React from 'react'
import { IoArrowForward } from 'react-icons/io5';
import portfoliophoto from "../../assets/portfoliophoto.jpg"

const About = () => {
    return (
        <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap 
    md:justify-center bg-black shadow-xl mx- md:mx-20bg-opacity-30 rounded-lg p-12'>
            <div>
                <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
                <div className='md:flex flex-wrap flex-col md:flex-row items-center'>
                <img className='h-55 w-55  rounded-full object-cover border-4 border-gray-300 shadow-lg' src={portfoliophoto} alt="" />

                <ul>
                    <div className='flex gap-3 py-4'>
                        <IoArrowForward size={30} className='mt-1' />

                        <span className='w-96'>
                            <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                                Mern Developer
                            </h1>
                            <p className='text-sm md:tex-md leading-tight'>
                                I am a passionate MERN Stack Developer skilled in building dynamic
                                and responsive web applications using MongoDB, Express.js, React.js,
                                and Node.js. I love creating efficient, user-friendly, and scalable solutions.
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward sizze={30} className='mt-1' />

                        <span className='w-96'>
                            <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                                frontend Developer
                            </h1>
                            <p className='text-sm md:tex-md leading-tight'>
                                I am a passionate Frontend Developer focused on building responsive,
                                user-friendly, and visually appealing web applications. With a strong
                                foundation in HTML, CSS, JavaScript, and React.js Redux. I transform creative
                                ideas into interactive digital experiences.
                                
                            </p>
                        </span>
                    </div>

                    <div className='flex gap-3 py-4'>
                        <IoArrowForward sizze={30} className='mt-1' />

                        <span className='w-96'>
                            <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                                Backend Developer
                            </h1>
                            <p className='text-sm md:tex-md leading-tight'>
                                I am a Backend Developer who builds reliable and high-performance server-side systems.
                                I specialize in Node.js, Express, and MongoDB, creating APIs, managing databases, and
                                integrating frontends with scalable backend logic.
                            </p>
                        </span>
                    </div>
                </ul>
            </div>
            </div>
        </div>
    )
}

export default About

