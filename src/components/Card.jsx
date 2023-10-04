import React from 'react'
import Image from 'next/image'
import { FaMusic } from 'react-icons/fa'


const Card = (props) => {
  return (
    <div className='shadow-md rounded-xl bg-white cursor-pointer group'>
      <div className='w-full relative overflow-hidden rounded-md'>
        <Image src={props.img} alt='pic' className='w-full h-72 rounded-md object-cover' />
        <div className='absolute inset-0 flex justify-center items-center -translate-x-[100%] transition-all ease-in-out duration-500 group-hover:translate-x-0 group-hover:bg-black/70'>
          <div className='p-5 flex flex-col justify-center'>
            <FaMusic size={20} className='text-white' />
            <p className='font-semibold text-white'>Movie Booking App</p>
          </div>
        </div>
      </div>
      <p className='text-center text-xl font-bold p-4'>{props.name}</p>
      <div className='flex justify-center gap-3'>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>{props.lang}</button>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>{props.lang1}</button>
      </div>
      <div className='flex justify-center p-3'>
        <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>VISIT</button>
      </div>
    </div>

  )
}

export default Card