import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footor = () => {
  return (
    <div className='h-40 w-full shadow-lg bg-blue-100'>
      <div className='flex justify-center gap-3 '>
        <AiFillGithub size={40} className='cursor-pointer rounded-full' />
        <FaSquareXTwitter size={40} color='black' className='cursor-pointer rounded-full ' />
        <AiFillLinkedin size={40} color='blue' className='cursor-pointer rounded-full' />
        <AiFillInstagram size={40} color='#e75480' className='cursor-pointer rounded-full' />
      </div>

    </div>
  )
}

export default Footor