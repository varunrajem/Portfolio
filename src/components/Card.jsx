'use client'

import React from 'react'
import Image from 'next/image'
import { BsLaptop } from 'react-icons/bs'
import { motion } from 'framer-motion'

const Card = (props) => {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className='glass-card rounded-2xl overflow-hidden cursor-pointer group shadow-2xl relative'
    >
      <div className='w-full relative overflow-hidden h-64'>
        {/* Project Image */}
        <Image 
          src={props.img} 
          alt={props.name} 
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' 
        />
        
        {/* Hover Overlay */}
        <div className='absolute inset-0 bg-slate-950/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center p-6 text-center backdrop-blur-sm'>
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            className='flex flex-col items-center gap-3'
          >
            <a 
              href={props.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className='p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 transition-colors duration-300'
            >
              <BsLaptop size={24} />
            </a>
            <p className='font-bold text-white text-lg tracking-wide'>Visit Project</p>
          </motion.div>
        </div>
      </div>
      
      {/* Content Area */}
      <div className='p-6 bg-slate-900/40'>
        <h3 className='text-xl font-bold text-white text-center mb-4 tracking-wide group-hover:text-blue-400 transition-colors duration-300'>
          {props.name}
        </h3>
        <div className='flex justify-center gap-2 flex-wrap'>
          {props.tags ? (
            props.tags.map((tag, i) => (
              <span 
                key={tag} 
                className={`px-3.5 py-1 rounded-full text-xs font-semibold bg-slate-850/80 border border-slate-850/90 ${
                  i % 3 === 0 ? 'text-blue-400 border-blue-900/40' : i % 3 === 1 ? 'text-indigo-400 border-indigo-900/40' : 'text-purple-400 border-purple-900/40'
                }`}
              >
                {tag}
              </span>
            ))
          ) : (
            <>
              {props.lang && (
                <span className='px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700/80 text-blue-400'>
                  {props.lang}
                </span>
              )}
              {props.lang1 && (
                <span className='px-4 py-1.5 rounded-full text-xs font-semibold bg-slate-800/80 border border-slate-700/80 text-indigo-400'>
                  {props.lang1}
                </span>
              )}
            </>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default Card