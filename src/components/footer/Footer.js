import React from 'react';
import './Footer.css';
import { FaInstagram, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const icons = [
    <FaTwitter />,
    <FaInstagram />,
    <FaYoutube />,
    <FaLinkedinIn />
]
const Footer = () => {
    const data = [
        {
            heading: "Useful Links",
            items: [
                "Home",
                "About us",
                "Jobs",
                "Refer & earn",
                "Terms of service",
                "Privacy policy",
                "Contact us",
            ]
        },
        {
            heading: "Our Services",
            items: [
                "Food Delivery",
                "Shopping",
                "Healthcare",
                "Real-estate",
                "Fitness",
                "Eduaction",
                "Automobile",
            ]
        },
    ]
    return (
        <div className='bg-[#181818] pb-5 pt-3 mt-5  a_footer_res'>
            <div className="container">
                <img className='mx-auto' src="logo13.png" width={150} alt="" />
                <div className="row a_footer rounded-[25px] justify-center text-white  py-5">
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className='col-12 col-md-5'>
                        <div>
                            <h1 className='text-[30px] a_700 mb-3'>Letzstepin</h1>
                            <p className='text-[14px] a_500 '>LetzStepIn – India's avant-garde super app designed to seamlessly <br />
                                integrate into your daily lifestyle, property endeavors, and travel <br /> escapades.
                                We're not just a platform; we're a commitment to user <br /> satisfaction, guaranteeing
                                unparalleled benefits, quality, and safety</p>
                            <div className='flex gap-3 mt-4 a_icons'>
                                {icons.map((icon, index) => {
                                    return <span className='text-[22px]' key={index}>{icon}</span>
                                })}
                            </div>
                        </div>
                    </motion.div>
                    {data.map((values, index) => {
                        return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} key={index} className='col-12 col-md-3'>
                            <ul>
                                <h1 className='font-bold text-[18px] mb-3'>{values.heading}</h1>
                                {values.items.map((value, index) => {
                                    return <li key={index}><Link className=' text-[#29D9E7] text-[14px] a_400' href="#">{value}</Link></li>
                                })}

                            </ul>
                        </motion.div>
                    })}

                </div>
            </div>
        </div>
    )
}

export default Footer