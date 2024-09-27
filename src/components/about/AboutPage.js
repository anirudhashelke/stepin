import { useState } from 'react'
import './About.css'

export function AboutPage()
{

    const[data]=useState(["letZstepin isn't just a stock image platform; it's a playground for creatives like you. We offer fresh, inclusive content that has fuelled the imaginations of brands like Netflix, Ogilvy, and Red Bull. With over 150,000 content creators from across the globe, our powerful search makes finding the perfect creative or editorial stock photos, vectors, 360-degree images, and videos a breeze.","At letZstepin, we believe in the power of difference. We celebrate a diverse community of creators and believe it's this very variety that fuels creative brilliance. We foster a supportive and inclusive environment, working with integrity and respect for both creators and customers. We empower our community by encouraging boldness and bravery, taking calculated risks to constantly improve.","letZstepin is more than just a platform; it's a community that values creativity, celebrates difference, and empowers you to push boundaries. Join us and see where your imagination takes you."])
    return(
        <>
         <div>
           <div className="w-100 p-0" style={{height:"500px"}}>
              <div className="imgContainer d-flex justify-content-center align-items-center">
                      <h2 className='aboutHeroTitle'>ABOUT US</h2>
              </div>
             
           </div>
           <div className='w-100 h-50 bg-white'>
              <div className='w-75 m-auto text-center my-5'>
                <h2 className='fw-semibold my-4'>Discover <span className='text-info'>letZstepin</span> culture and vision</h2>
                {
                    data.map((value,index)=>
                    <p key={index} className=''>{value}</p>)
                }
              </div>
            </div>
         </div>
        </>
    )
}