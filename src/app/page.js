'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import pic from '../../public/Image/Layer.png'
import Img from '../../public/Image/Image.jpg'
import varun from '../../public/Image/varunraje.jpeg'
import { FaGamepad, FaTerminal, FaMusic } from "react-icons/fa"
import { AiFillGithub, AiFillLinkedin, AiFillInstagram, AiFillYoutube, AiFillHtml5 } from "react-icons/ai"
import { FaSquareXTwitter } from "react-icons/fa6"
import { BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact, BiLogoNodejs, BiLogoMongodb } from "react-icons/bi"
import { TbBrandNextjs, TbBrandReactNative } from "react-icons/tb"
import CircularProgress from '@mui/joy/CircularProgress'
import Footor from '@/components/Footor'
import Card from '@/components/Card'
import { motion, useInView } from 'framer-motion'

// Sub-component for animated skill entry
const AnimatedSkill = ({ value, label, icon: Icon, color }) => {
  const [progress, setProgress] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  useEffect(() => {
    if (isInView) {
      let start = 0
      const duration = 1000 // 1 second
      const stepTime = Math.abs(Math.floor(duration / value))
      const timer = setInterval(() => {
        start += 1
        setProgress(start)
        if (start >= value) {
          clearInterval(timer)
        }
      }, stepTime)
      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="flex flex-col items-center gap-3 p-4 rounded-2xl bg-slate-900/30 border border-slate-800/40 backdrop-blur-sm shadow-xl"
    >
      <CircularProgress
        size="lg"
        determinate
        value={progress}
        sx={{
          '--CircularProgress-size': '105px',
          '--CircularProgress-trackThickness': '5px',
          '--CircularProgress-progressThickness': '7px',
          '--CircularProgress-progressColor': color === 'neutral' ? '#94a3b8' : undefined,
          backgroundColor: 'rgba(15, 23, 42, 0.4)',
        }}
        color={color}
      >
        <Icon size={44} className="text-white" />
      </CircularProgress>
      <p className="font-semibold text-slate-300 text-sm mt-1">{label}</p>
    </motion.div>
  )
}

// Fade in container component
const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  )
}

const Page = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-gray-100 relative">

      {/* Dynamic Background Glowing Blobs */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-blue-600/10 blur-[80px] md:blur-[120px] animate-pulse" />
        <div className="absolute bottom-[20%] right-[5%] w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full bg-purple-600/10 blur-[100px] md:blur-[140px] animate-pulse duration-4000" />
      </div>

      <Navbar />

      {/* Main Layout Grid */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row min-h-[calc(100vh-5rem)]">

        {/* Left Side: Sticky Hero Showcase */}
        <div className="w-full md:w-[45%] md:sticky md:h-[calc(100vh-5rem)] top-20 left-0 flex flex-col justify-center items-center md:items-start p-6 md:p-12 overflow-hidden border-b md:border-b-0 md:border-r border-slate-900">

          {/* Subtle Grid Overlay inside Left Side */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <Image src={pic} alt="Layer" className="w-full h-full object-cover" />
          </div>

          <div className="relative z-10 flex flex-col items-center md:items-start text-center md:text-left space-y-6">

            {/* Animated Profile Image */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', stiffness: 100, delay: 0.2 }}
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="relative rounded-2xl p-1.5 bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 shadow-2xl shadow-indigo-500/20"
            >
              <Image src={varun} alt="pic" className="rounded-xl w-36 h-36 md:w-44 md:h-44 object-cover" />
            </motion.div>

            {/* Typography */}
            <div className="space-y-2">

              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="text-4xl md:text-5xl font-extrabold text-white tracking-tight"
              >
                Varunraje
              </motion.h1>

              <motion.h2
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400"
              >
                Full-Stack Developer
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-slate-400 max-w-sm leading-relaxed"
            >
              Crafting premium digital experiences utilizing the power of the MERN Stack, NextJS, and reactive UI frameworks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <a href="https://www.instagram.com/varunrajem" target="_blank" rel="noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(99, 102, 241, 0.4)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-sm transition-all duration-300 shadow-lg shadow-indigo-500/20"
                >
                  Let&apos;s Talk
                </motion.button>
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05, border: '1px solid #818cf8', boxShadow: '0 0 20px rgba(129, 140, 248, 0.2)' }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 rounded-full border border-slate-700 bg-slate-900/50 text-indigo-300 font-bold text-sm transition-all duration-300 shadow-md"
                >
                  View Resume
                </motion.button>
              </a>
            </motion.div>

          </div>
        </div>

        {/* Right Side: Scrollable Details */}
        <div className="w-full md:w-[55%] p-6 md:p-12 space-y-24">

          {/* Section: About Me */}
          <section id="about" className="pt-8">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-white mb-8 relative inline-block group">
                About Me
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full transition-all group-hover:w-full"></span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="glass-card rounded-3xl p-8 md:p-10 shadow-2xl relative bg-slate-900/30 overflow-visible mt-12">

                {/* Floating Avatar Badge on Card */}
                <div className="absolute -top-12 right-6 md:right-10 flex justify-end">
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="p-1 bg-slate-900 border border-slate-800 rounded-full shadow-2xl"
                  >
                    <Image src={varun} alt="avatar" className="rounded-full w-24 h-24 object-cover" />
                  </motion.div>
                </div>

                <div className="text-slate-300 leading-relaxed space-y-4 pt-8 md:pt-4 text-justify">
                  <p className="text-xl font-semibold text-white">Hello,</p>

                  <p>
                    Hi, I'm <strong className="text-white font-semibold">Varunraje</strong>, an MCA graduate from Galgotias College of Engineering and Technology and a passionate Full-Stack Web Developer. I enjoy transforming ideas into modern, responsive, and user-friendly web applications that deliver meaningful digital experiences.
                  </p>

                  <p>
                    With expertise in JavaScript, React.js, Next.js, Node.js, and modern web technologies, I focus on building applications that are both visually engaging and highly functional. I enjoy creating seamless user experiences while writing clean, efficient, and scalable code.
                  </p>

                  <p>
                    Driven by continuous learning and innovation, I am always exploring new technologies and challenging myself to grow as a developer. My goal is to create impactful solutions that solve real-world problems and make a positive difference through technology.
                  </p>
                </div>

                {/* Hobbies / Hobbies Header */}
                <h3 className="text-lg font-bold text-white mt-10 mb-4">I like,</h3>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {[
                    { icon: FaGamepad, name: 'Gaming' },
                    { icon: FaTerminal, name: 'Coding' },
                    { icon: FaMusic, name: 'Music' },
                    { icon: AiFillYoutube, name: 'Youtube' }
                  ].map((hobby, index) => {
                    const HobbyIcon = hobby.icon
                    return (
                      <motion.div
                        key={index}
                        whileHover={{ y: -5, backgroundColor: 'rgba(30, 41, 59, 0.4)' }}
                        className="flex flex-col items-center justify-center p-4 rounded-xl border border-slate-800/60 bg-slate-950/40 text-center gap-2"
                      >
                        <HobbyIcon size={28} className="text-indigo-400" />
                        <span className="text-xs font-semibold text-slate-300">{hobby.name}</span>
                      </motion.div>
                    )
                  })}
                </div>

              </div>
            </ScrollReveal>
          </section>

          {/* Section: Skills */}
          <section id="skill" className="scroll-mt-24">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-white mb-8 relative inline-block group">
                My Skills
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full transition-all group-hover:w-full"></span>
              </h2>
            </ScrollReveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-6">
              <AnimatedSkill value={90} label="HTML" icon={AiFillHtml5} color="neutral" />
              <AnimatedSkill value={70} label="CSS" icon={BiLogoCss3} color="danger" />
              <AnimatedSkill value={80} label="Javascript" icon={BiLogoJavascript} color="success" />
              <AnimatedSkill value={70} label="ReactJS" icon={BiLogoReact} color="warning" />
              <AnimatedSkill value={75} label="NextJS" icon={TbBrandNextjs} color="neutral" />
              <AnimatedSkill value={60} label="NodeJS" icon={BiLogoNodejs} color="danger" />
              <AnimatedSkill value={50} label="MongoDB" icon={BiLogoMongodb} color="success" />
              <AnimatedSkill value={65} label="React Native" icon={TbBrandReactNative} color="warning" />
              <AnimatedSkill value={85} label="Tailwind CSS" icon={BiLogoTailwindCss} color="warning" />
            </div>
          </section>

          {/* Section: Projects */}
          <section id="projects" className="scroll-mt-24 pb-12">
            <ScrollReveal>
              <h2 className="text-3xl font-extrabold text-white mb-8 relative inline-block group">
                Projects
                <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full transition-all group-hover:w-full"></span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6">
                <Card img={Img} name="Help Yaar" tags={["ReactJS", "Tailwind CSS", "Firebase"]} link="https://help-yaarr.vercel.app/" />
                <Card img={Img} name="Car Rental" tags={["NextJS", "Tailwind CSS"]} link="https://car-rentall.vercel.app/" />
                <Card img={Img} name="Web Conversation" tags={["ReactJS", "Firebase"]} link="https://webconversation.vercel.app/" />
                <Card img={Img} name="Creamy Cakes" tags={["NextJS", "Tailwind CSS"]} link="https://creamycakes.vercel.app/" />
                <Card img={Img} name="DotMarkup" tags={["NextJS", "NodeJS"]} link="https://dot-markup.vercel.app/" />
                <Card img={Img} name="E-Commerce" tags={["ReactJS", "NodeJS"]} link="https://ghodacommerce.vercel.app/" />
              </div>
            </ScrollReveal>
          </section>

        </div>
      </div>

      {/* Floating Desktop Social Links (right side vertical sidebar) */}
      <div className="hidden md:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-6 p-4 rounded-full bg-slate-900/60 border border-slate-800/80 backdrop-blur-md shadow-2xl">
        {[
          { icon: AiFillGithub, url: 'https://www.github.com/varunrajem' },
          { icon: FaSquareXTwitter, url: 'https://www.twitter.com/varunrajem' },
          { icon: AiFillLinkedin, url: 'https://www.linkedin.com/in/varunrajem' },
          { icon: AiFillInstagram, url: 'https://www.instagram.com/varunrajem' }
        ].map((social, idx) => {
          const SocialIcon = social.icon
          return (
            <motion.a
              key={idx}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.2, color: '#818cf8' }}
              className="text-slate-400 hover:text-white transition-colors duration-300"
            >
              <SocialIcon size={24} />
            </motion.a>
          )
        })}
      </div>

      <Footor />
    </div>
  )
}

export default Page
