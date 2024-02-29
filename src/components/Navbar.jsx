'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io";
import { GiSkills } from "react-icons/gi";
import { CiCircleQuestion } from "react-icons/ci";
import { IoIosContact } from "react-icons/io";
import { GoProject } from "react-icons/go";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)


  return (
    <>
      <div className='flex justify-between items-center h-16 w-full bg-white shadow-md p-4 sticky top-0 z-30'>
        <Link href='/'>
          <div className='text-blue-500 text-3xl items-center font-bold cursor-pointer '>Portfolio.</div>
        </Link>
        <div className='block md:hidden'>
          <button
            className='p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-[#0BC9FC]'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            ) : (
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='w-6 h-6 text-[#0BC9FC]'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
                strokeWidth={2}
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M4 6h16M4 12h16M4 18h16'
                />
              </svg>
            )}
          </button>
        </div>

        <div className='hidden md:flex items-center gap-5'>

          <Link href='' className='cursor-pointer'>Home</Link>


          <Link href='#about' className='cursor-pointer'>About</Link>


          <Link href='#skill' className='cursor-pointer'>Skill</Link>


          <Link href='#projects' className='cursor-pointer'>Project</Link>

          <Link href='#contact'>
            <button className='bg-blue-500 py-2 px-4 rounded-full text-white cursor-pointer'>Contact</button>
          </Link>
        </div>
        {isOpen && <div className='md:hidden bg-black/60 min-h-screen fixed top-16 left-0 right-0 bottom-0'>
          <div className='w-[65%] bg-blue-100 min-h-full p-5'>
            <ul className='flex flex-col gap-5'>
              <li onClick={() => setIsOpen(false)}>
                <div className='flex justify-start items-center gap-2'>
                  <IoMdHome className='w-5 h-5' />
                  <Link href='' className='cursor-pointer'>Home</Link>
                </div>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <div className='flex justify-start items-center gap-2'>
                  <CiCircleQuestion className='w-5 h-5' />
                  <Link href='#about' className='cursor-pointer'>About</Link>
                </div>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <div className='flex justify-start items-center gap-2'>
                  <GiSkills className='w-5 h-5' />
                  <Link href='#skill' className='cursor-pointer'>Skill</Link>
                </div>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <div className='flex justify-start items-center gap-2'>
                  <GoProject className='w-5 h-5' />
                  <Link href='#projects' className='cursor-pointer'>Project</Link>
                </div>
              </li>
              <li onClick={() => setIsOpen(false)}>
                <div className='flex justify-start items-center gap-2'>
                  <IoIosContact className='w-5 h-5' />
                  <Link href='#contact' className='cursor-pointer'>Contact</Link>
                </div>
              </li>
            </ul>
          </div>
        </div>}
      </div>
    </>

  )
}

export default Navbar