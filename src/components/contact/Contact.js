import React  from 'react'
import './Contact.css'
import { SlLogin } from 'react-icons/sl'
import { IoCallOutline, IoLocationOutline } from 'react-icons/io5'
import ContactPage from './ContactPage'
const Contact = () => {
    return (
        <div className='a_contact'>
            <div className='container '>
                <div className='flex align-items-center justify-between'>
                    <h1 className='text-[#36a2e0] text-[1.5rem] font-semibold'> FAQ</h1>
                    <button className='a_go_btn flex align-items-center gap-2'>GO TO FAQ <SlLogin /></button>
                </div>
                <div className="row  mt-28 justify-between pt-3 ">
                    <div className='col-12 col-md-7 a_contact_res'>
                        <div className='text-[#fff] text-center'>
                            <h1 className='text-[2.5rem] text-[#fff] a_700 ' >Contact Us</h1>
                            <IoLocationOutline size={38} className='mt-4 mb-3 mx-auto' />
                            <h6 className='text-[1rem]  a_700'>Head Office</h6>
                            <p className='text-[0.8rem] a_500 my-2'>507 twin tower, <br />
                                Pune, MH 411057</p>
                            <IoCallOutline size={38} className='mt-5 mb-3 mx-auto' />
                            <h4 className='text-[20px] my-2'>Contact Us</h4>
                            <p className='text-[14px]'>reachus@letzstepin.com</p>
                        </div>
                    </div>
                    {/* contact form */}
                       <div className='col-12 col-md-4' ><ContactPage /></div>
                    
                </div>
            </div>
        </div>
    )
}

export default Contact