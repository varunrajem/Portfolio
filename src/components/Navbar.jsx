import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center h-16 w-full bg-white shadow-md p-4 sticky top-0 z-30'>
      <div className='text-blue-500 text-3xl items-center font-bold'>Portfolio.</div>
      <div>
        <ul className='flex gap-5 items-center text-center'>
          <a>Home</a>
          <a>About</a>
          <a>Skill</a>
          <a>Project</a>
          <button className='bg-blue-500 py-2 px-4 rounded-full text-white'>Contact</button>
        </ul>
      </div>


    </div>
  )
}

export default Navbar