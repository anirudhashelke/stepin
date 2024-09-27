import React from 'react'
import './About.css'
import { motion } from "framer-motion"
const About = () => {
    const data = [
        {
            imgurl: "about/menu(1).png",
            title: "Resorts"
        },
        {
            imgurl: "about/shopping-bag(3).png",
            title: "Shop,"
        },
        {
            imgurl: "about/travel.png",
            title: "Travel"
        },
        {
            imgurl: "about/school(2).png",
            title: "Pre-schools"
        },
        {
            imgurl: "about/booking(1).png",
            title: "Gyms"
        },
        {
            imgurl: "about/city.png",
            title: "Restaurants"
        },
        {
            imgurl: "about/healthy-lifestyle.png",
            title: "Clinics"
        },
        {
            imgurl: "about/school(2).png",
            title: "College"
        },
        {
            imgurl: "about/booking(1).png",
            title: "Hotel Rooms"
        },
        {
            imgurl: "about/school(2).png",
            title: "Schools"
        },
    ]
    return (
        <div className='container my-5 about'>
            <h1 className='text-[2rem] a_700 '>Get what you love!</h1>
            <motion.div initial={{ opacity: 0 }}
                whileInView={{ opacity: 3 }}
                transition={{ duration: 4 }} className="row a_about mt-2 justify-around">
                {data.map(({ imgurl, title }, index) => {
                    return <div key={index} className='a_about_res w-[10%]'>
                        <img src={imgurl} width={48} alt="#" />
                        <h6 className='text-[13px] text-[#444444] a_600 mt-4'>{title}</h6>
                    </div>
                })}
            </motion.div>
        </div>
    )
}

export default About