import React from 'react'
import Image from 'next/image'


const Card = (props) => {
  return (
    <div className='w-64 h-[400px] shadow-md rounded-xl bg-white mr-24 cursor-pointer hover:animate-pulse'>
      <div className=''>
        <Image src={props.img} alt='pic' className='w-auto h-64 rounded-md object-cover ' />
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