import React from 'react'
import './Banner.css'
const Banner = () => {
  return (
    <div className='a_banner flex align-items-center justify-center container-fluid'>
       <div className=' mb-[100px] '>
       <h1 className='text-[#1a1a1a]  text-[2.8rem] a_700 text-center'>India's ameliorated </h1>
      <div className='a_banner_super flex justify-center align-items-center gap-2'>
      <h1 className='superApp text-[#29D9E7] a_900 text-[2.8rem] text-center'>#SuperApp</h1>
      <img src="app.png" className='w-[140px] h-[100px] mx-auto' alt="#" />
      </div>
       </div>
    </div>
  )
}

export default Banner