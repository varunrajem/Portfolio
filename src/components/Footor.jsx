'use client'

import React from 'react'
import { AiFillGithub } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { AiFillLinkedin } from "react-icons/ai"
import { AiFillInstagram } from "react-icons/ai"
import { motion } from 'framer-motion'

const Footor = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: AiFillInstagram, color: 'text-pink-500 hover:text-pink-400', url: 'https://www.instagram.com/varunrajem' },
    { icon: AiFillLinkedin, color: 'text-blue-500 hover:text-blue-400', url: 'https://www.linkedin.com/in/varunrajem' },
    { icon: FaSquareXTwitter, color: 'text-white hover:text-gray-300', url: 'https://www.twitter.com/varunrajem' },
    { icon: AiFillGithub, color: 'text-gray-400 hover:text-white', url: 'https://www.github.com/varunrajem' }
  ]

  return (
    <footer id='contact' className="bg-slate-950 border-t border-slate-900 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-3xl font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
            DEV-VARUN
          </span>
          <p className="text-sm text-slate-500 mt-2">
            &copy; {currentYear} Varunraje. All rights reserved.
          </p>
        </div>
        
        <ul className="flex items-center gap-6">
          {socialLinks.map((social, index) => {
            const IconComponent = social.icon
            return (
              <motion.li 
                key={index}
                whileHover={{ scale: 1.2, y: -4 }}
                whileTap={{ scale: 0.9 }}
                transition={{ type: 'spring', stiffness: 300, damping: 15 }}
              >
                <a 
                  href={social.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`block p-2 rounded-full bg-slate-900 border border-slate-800 transition-colors ${social.color}`}
                >
                  <IconComponent size={24} />
                </a>
              </motion.li>
            )
          })}
        </ul>
      </div>
    </footer>
  )
}

export default Footor