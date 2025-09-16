import React from 'react'
import { IoArrowForward } from 'react-icons/io5'; 
import APJAbdulKalam from "../../assets/APJ Abdul Kalam.jpg"

const About = () => {
  return (
    <div id="About" className='text-white md:flex overflow-hidden items-center md:flex-wrap 
    md:justify-center bg-black shadow-xl mx- md:mx-20bg-opacity-30 rounded-lg p-12'>
        <div>
            <h2 className='text-2xl md:text-4xl font-bold'>About</h2>
            <div className='md:flex flex-wrap flex-col md:flex-row items-center'></div>
            <img className='md:h-80' src={APJAbdulKalam} alt="" />

            <ul>
                <div className='flex gap-3 py-4'>
                    <IoArrowForward size={30} className='mt-1' />

                    <span className='w-96'>
                        <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                            Mern Developer
                        </h1>
                        <p className='text-sm md:tex-md leading-tight'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Aperiam sunt totam ipsa consequatur ea ipsam fuga nostrum 
                            officia architecto nam, quis cumque, officiis voluptas, 
                            numquam odio. Ipsam iste nesciunt harum officia. Dignissimos 
                            quia iure et iste reprehenderit nam voluptatum? Saepe!
                        </p>
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <IoArrowForward sizze={30} className='mt-1' />

                    <span className='w-96'>
                        <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                            full stack Developer
                        </h1>
                        <p className='text-sm md:tex-md leading-tight'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Aperiam sunt totam ipsa consequatur ea ipsam fuga nostrum 
                            officia architecto nam, quis cumque, officiis voluptas, 
                            numquam odio. Ipsam iste nesciunt harum officia. Dignissimos 
                            quia iure et iste reprehenderit nam voluptatum? Saepe!
                        </p>
                    </span>
                </div>

                <div className='flex gap-3 py-4'>
                    <IoArrowForward sizze={30} className='mt-1' />

                    <span className='w-96'>
                        <h1 className='text-xl md:taxt-2xl font-semibold leading-normal'>
                            DataBase Developer
                        </h1>
                        <p className='text-sm md:tex-md leading-tight'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                            Aperiam sunt totam ipsa consequatur ea ipsam fuga nostrum 
                            officia architecto nam, quis cumque, officiis voluptas, 
                            numquam odio. Ipsam iste nesciunt harum officia. Dignissimos 
                            quia iure et iste reprehenderit nam voluptatum? Saepe!
                        </p>
                    </span>
                </div>
            </ul>
        </div>
      
    </div>
  )
}

export default About
