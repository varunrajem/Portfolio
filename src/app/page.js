import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'
import pic from '../../public/Image/Layer.png'
import Img from '../../public/Image/Image.jpg'
import varun from '../../public/Image/varun.png'
import { FaGamepad } from "react-icons/fa";
import { FaTerminal } from "react-icons/fa";
import { FaMusic } from "react-icons/fa";
import { AiFillGithub } from "react-icons/ai";
import { FaSquareXTwitter } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { BiLogoJavascript } from "react-icons/bi";
import { BiLogoTailwindCss } from "react-icons/bi";
import { BiLogoReact } from "react-icons/bi";
import { BiLogoNodejs } from "react-icons/bi";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import CircularProgress from '@mui/joy/CircularProgress';
import Footor from '@/components/Footor'
import Card from '@/components/Card'

const page = () => {
  return (
    <div>

      {/* ------------ Navbar ---------- */}
      <Navbar />


      {/* -------- Hero -------- */}
      <div className='flex bg-blue-50 relative'>
        <div className='w-[50%] sticky h-screen top-16 left-0'>

          <Image src={pic} alt='Layer' className='h-full w-screen' />
          <div className='absolute top-48 left-28'>
            <Image src={Img} alt='pic' className='rounded-full w-36 h-36' />
            <div className='font-bold text-white text-4xl'>Full-Stack Developer </div>
            <p className='font-bold text-3xl'>Varunraje</p>
            <button className='border font-semibold border-black px-4 rounded-full hover:bg-blue-500 hover:text-white'>Let&apos;s Talk</button>
          </div>
        </div>
        <div className='w-[50%] p-4'>
          <p className='text-blue-500 text-2xl font-bold my-8'>About Me</p>
          <div className='w-4/5 h-auto shadow-2xl rounded-xl bg-white p-10 mr-24'>
            <div className='flex justify-end -m-16'>
              <Image src={Img} alt='pic' className='rounded-full w-36 h-36' />
            </div>
            <p className='text-2xl font-bold mb-10'>Hello,</p>
            <div className='text-gray-700 font-poppins text-justify'>My name is Varunraje and I am a 3rd year collage student at prayagraj university.
              I am a highly skilled full-stack web developer with expertise in the MERN stack, dedicated to creating dynamic and user-friendly websites that deliver seamless experiences
              <p className='font-Poppins pt-4'>Driven by my passion for coding, I consistently strive for excellence in every project, utilizing cutting-edge technologies to solve complex problems.
                With an innovative mindset, I approach projects with creativity, constantly seeking new ways to enhance user interactions and improve overall functionality.
                I am a dedicated lifelong learner, staying updated with the latest industry trends and technologies, which allows me to incorporate the best practices into my development process.</p>
              <p className='font-poppins pt-4'>As a collaborative team player, I thrive in fast-paced environments, working seamlessly with cross-functional teams to deliver high-quality, scalable, and robust web applications.
                I showcase a diverse range of projects that demonstrate my expertise to create responsive and visually appealing web applications.</p></div>

            <p className='text-xl font-bold mt-10'>I like,</p>
            <div className='flex gap-20 py-4'>
              <FaGamepad size={40} className='text-blue-500' />
              <FaTerminal size={40} className='text-blue-500' />
              <FaMusic size={40} className='text-blue-500' />
              <AiFillYoutube size={40} className='text-blue-500' />
            </div>
          </div>



          <div className='text-blue-500 text-2xl font-bold pt-32'>My Skill</div>
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-20 pt-8'>
            <div>
              <CircularProgress size="lg" determinate value={90} sx={{ '--CircularProgress-size': '120px' }} color='neutral' >
                <AiFillHtml5 size={60} />
              </CircularProgress>
              <p className='font-semibold ml-9'>HTML</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={70} sx={{ '--CircularProgress-size': '120px' }} color='danger'>
                <BiLogoCss3 size={60} />
              </CircularProgress>
              <p className='font-semibold ml-9'>CSS</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={80} sx={{ '--CircularProgress-size': '120px' }} color='success'>
                <BiLogoJavascript size={60} />
              </CircularProgress>
              <p className='font-semibold ml-5'>Javascript</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={70} sx={{ '--CircularProgress-size': '120px' }} color='warning'>
                <BiLogoReact size={60} />
              </CircularProgress>
              <p className='font-semibold ml-7'>ReactJS</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={75} sx={{ '--CircularProgress-size': '120px' }} color='neutral'>
                <TbBrandNextjs size={60} />
              </CircularProgress>
              <p className='font-semibold ml-7'>NextJS</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={60} sx={{ '--CircularProgress-size': '120px' }} color='danger'>
                <BiLogoNodejs size={60} />
              </CircularProgress>
              <p className='font-semibold ml-8'>NodeJS</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={50} sx={{ '--CircularProgress-size': '120px' }} color='success'>
                <BiLogoMongodb size={60} />
              </CircularProgress>
              <p className='font-semibold ml-6'>MongoDB</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={65} sx={{ '--CircularProgress-size': '120px' }} color='warning'>
                <TbBrandReactNative size={60} />
              </CircularProgress>
              <p className='font-semibold ml-2'>React Native</p>
            </div>

            <div>
              <CircularProgress size="lg" determinate value={85} sx={{ '--CircularProgress-size': '120px' }} color='warning'>
                <BiLogoTailwindCss size={60} />
              </CircularProgress>
              <p className='font-semibold ml-3'>Tailwind CSS</p>
            </div>

          </div>
          {/*--------- Projects -------*/}
          <div className='text-blue-500 text-2xl font-bold pt-32'>Projects</div>
          <div className='grid grid-cols-2 py-7 gap-y-10'>
            <Card img={Img} name="Movie Booking" lang='ReactJS' lang1='NodeJS' />
            <Card img={Img} name="RealMe" lang='Vue' lang1='Vuetify' />
            <Card img={Img} name="Triper24" lang='ReactNative' lang1='Appwrite' />
            <Card img={Img} name="Blog Website" lang='NextJS' lang1='NodeJS' />
          </div>
        </div>




      </div>

      <div className='fixed flex items-center h-screen top-0 right-0'>
        <div className='grid'>
          <AiFillGithub size={25} className='cursor-pointer' />
          <FaSquareXTwitter size={25} className='cursor-pointer' />
          <AiFillLinkedin size={25} className='cursor-pointer' />
          <AiFillInstagram size={25} className='cursor-pointer' />
        </div>
      </div>



      {/*------------ Footor ---------*/}
      <div className=''>
        <Footor />
      </div>
    </div>
  )
}

export default page