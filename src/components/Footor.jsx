import React from 'react'
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footor = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-3xl font-bold text-blue-700 sm:text-center">DEV-VARUN
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 sm:mt-0">
          <li>
            <AiFillInstagram size={36} color='#e75480' className='cursor-pointer rounded-full' />
          </li>
          <li>
            <AiFillLinkedin size={36} color='blue' className='cursor-pointer rounded-full' />

          </li>
          <li>
            <FaSquareXTwitter size={36} color='black' className='cursor-pointer rounded-full ' />

          </li>
          <li>
            <AiFillGithub size={36} color='black' className='cursor-pointer rounded-full' />
          </li>
        </ul>
      </div>
    </footer>

  )
}

export default Footor