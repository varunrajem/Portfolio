'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { IoMdHome } from "react-icons/io"
import { GiSkills } from "react-icons/gi"
import { CiCircleQuestion } from "react-icons/ci"
import { IoIosContact } from "react-icons/io"
import { GoProject } from "react-icons/go"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Track scroll position to change header style
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#', icon: IoMdHome },
    { name: 'About', href: '#about', icon: CiCircleQuestion },
    { name: 'Skills', href: '#skill', icon: GiSkills },
    { name: 'Projects', href: '#projects', icon: GoProject },
  ]

  return (
    <>
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled 
            ? 'h-16 bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20' 
            : 'h-20 bg-transparent border-b border-transparent'
        }`}
      >
        <div className='max-w-7xl mx-auto h-full flex justify-between items-center px-6 md:px-12'>
          <Link href='/'>
            <div className='text-3xl font-extrabold cursor-pointer tracking-wider flex items-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 hover:scale-105 transition-transform duration-300'>
              Portfolio.
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center gap-8'>
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className='relative text-gray-300 hover:text-white font-medium text-sm transition-colors duration-300 py-2 group'
              >
                {link.name}
                <span className='absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-500 transition-all duration-300 group-hover:w-full'></span>
              </a>
            ))}

            <a href='#contact'>
              <motion.button 
                whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                className='bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 py-2 px-6 rounded-full text-white font-semibold text-sm transition-all duration-300 shadow-md shadow-blue-500/20'
              >
                Contact
              </motion.button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className='block md:hidden'>
            <button
              className='p-2 text-blue-400 hover:text-white rounded-md outline-none focus:outline-none transition-colors'
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='w-6 h-6'
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
                  className='w-6 h-6'
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
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className='md:hidden fixed inset-0 z-40 bg-black/75 backdrop-blur-sm'
            />

            {/* Sidebar */}
            <motion.div 
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className='md:hidden fixed top-0 left-0 bottom-0 w-[70%] max-w-[300px] z-50 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shadow-2xl'
            >
              <div className='flex flex-col gap-8'>
                <div className='text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 pb-4 border-b border-slate-800'>
                  Portfolio.
                </div>
                <ul className='flex flex-col gap-6'>
                  {navLinks.map((link, idx) => {
                    const Icon = link.icon
                    return (
                      <motion.li 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={link.name} 
                        onClick={() => setIsOpen(false)}
                      >
                        <a href={link.href} className='flex items-center gap-4 text-gray-300 hover:text-white font-medium text-lg py-2 transition-colors'>
                          <Icon className='w-5 h-5 text-blue-400' />
                          {link.name}
                        </a>
                      </motion.li>
                    )
                  })}
                </ul>
              </div>

              <div className='mt-auto pt-6 border-t border-slate-800'>
                <a href='#contact' onClick={() => setIsOpen(false)}>
                  <button className='w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-500/20 active:scale-95 transition-transform'>
                    Contact Me
                  </button>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      
      {/* Spacer to prevent content overlap */}
      <div className='h-20 w-full' />
    </>
  )
}

export default Navbar