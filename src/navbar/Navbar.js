import React, { useState } from 'react'
import './Navbar.css'
import { SlArrowDown, SlMenu } from 'react-icons/sl'
import { IoClose } from 'react-icons/io5'
import clsx from 'clsx'
import Mode from '../components/Mode'
import { motion } from "framer-motion"
import SignIn from '../components/SignIn'
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <header className=' bg-[#000000] fixed w-[100%]    py-4  z-[1000]  ' >
      <div className='container flex  w-[100%] align-items-center'>
      <div className="row  justify-between   align-items-cente w-100">
        {/* logo */}
        <motion.div initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }} className='col-12 col-md-2 flex align-items-center justify-between '><img src="logo13.png" width={100} alt="logo" /><Mode />
          <SlMenu className='lg:hidden  text-[#fff]' onClick={() => { setOpen(true) }} />    </ motion.div>

        {/* navbar  */}

        <motion.nav initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className='col-12 col-md-7 a_navbar_nav_home justify-end flex gap-5 align-items-center '>
          <ul className=' flex gap-[30px] a_navbar_box' >
            <li ><Link to='/' className='text-[#36a2e0]' >Home</Link></li>
            <li className='hover:text-[#36a2e0]'><Link to='About' > About</Link></li>
            <li><Link to={"/Work"} >Work</Link></li>
            <li ><Link className='flex gap-2 align-items-center'>Location <SlArrowDown size={12} /></Link></li>
            <li><Link className='flex gap-2 align-items-center'>Categories <SlArrowDown size={12} /></Link></li>
          </ul>
          <div> <SignIn /></div>
        </motion.nav>

        {/* mobile menu */}

        <div className={clsx('fixed h-full w-screen  bg-black/50  backdrop-blur-sm top-0 right-0 -translate-x-full',
          open && "translate-x-0"
        )}>
          <div className=' a_navbar_nav flex gap-5   lg:hidden  bg-[#212EA0] flex--cc  absolute left-0 top-0 h-screen  ps-16 pt-32  z-50  w-100 '>
            <IoClose onClick={() => { setOpen(false) }} className='absolute top-[20px] right-[10px]  text-[30px] text-[#fff] ' />
            <ul className='a_navbar flex gap-[30px] a_navbar_box '>
              <li ><Link to={"/"} className='text-[#36a2e0]'>Home</Link></li>
              <li><Link to={"/About"} className='text-white' href="#">About </Link></li>
              <li><Link to={"/Work"} >Work</Link></li>
              <li ><Link className='flex gap-2 align-items-center text-white'>Location <SlArrowDown size={12} /></Link></li>
              <li><Link className='flex gap-2 align-items-center text-white'>Categories <SlArrowDown size={12} /></Link></li>
            </ul>
            <div> <SignIn /></div>
          </div>
        </div>
      </div>
      </div>
    </header>
  )
}

export default Navbar