import React from 'react'
import Img from '../../public/Image/Image.jpg'
import Image from 'next/image'


const Card = () => {
  return (
    <div className='w-64 h-[400px] shadow-lg rounded-xl bg-white mr-24 cursor-pointer hover:animate-pulse'>
      <div className=''>
        <Image src={Img} alt='pic' className='w-auto h-64 rounded-md object-cover ' />
      </div>
      <p className='text-center text-xl font-bold p-4'>Movie Booking</p>
      <div className='flex justify-center gap-3'>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>ReactJS</button>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>MongoDB</button>
      </div>
      <div className='flex justify-center p-3'>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>VISIT</button>
      </div>
    </div>

  )
}

export default Card