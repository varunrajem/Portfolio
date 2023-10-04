import React from 'react'
import Image from 'next/image'
import { BsLaptop } from 'react-icons/bs'
import Link from 'next/link'


const Card = (props) => {
  return (
    <div className='shadow-md rounded-xl bg-white cursor-pointer group'>
      <div className='w-full relative overflow-hidden rounded-md'>
        <Image src={props.img} alt='pic' className='w-full h-72 rounded-md object-cover' />
        <div className='absolute inset-0 flex justify-center items-center -translate-x-[100%] transition-all ease-in-out duration-500 group-hover:translate-x-0 group-hover:bg-black/70'>
          <div className='p-5 flex flex-col justify-center'>
            <Link href={props.link}><BsLaptop size={20} className='text-white' /></Link>
            <p className='font-semibold text-white'>Project Info</p>
          </div>
        </div>
        <p className='text-center text-xl font-bold text-gray-700 p-4'>{props.name}</p>
        <div className='flex justify-center gap-3 pb-4'>
          <button className='border font-semibold text-gray-700 border-black px-3 rounded-full hover:bg-blue-500 hover:text-white'>{props.lang}</button>
          <button className='border font-semibold text-gray-700 border-black px-3 rounded-full hover:bg-blue-500 hover:text-white'>{props.lang1}</button>
        </div>
      </div>
    </div>

  )
}

export default Card