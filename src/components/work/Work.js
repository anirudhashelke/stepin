import React from 'react'
export function Work(){
      const data=[
            {
                title:"Our tailored Services for Non-Existing Properties",
                img:"/assets/rawImg3.jpg",
                discription:"LetzStepIn pioneers the art of transforming visionary concepts into immersive vivid realities accessible to all—anytime, everywhere. Leveraging cutting-edge technology, our expertise encompasses virtual staging, renovation, and crafting of fully immersive 360° CGI show homes and properties. Our commitment is to deliver hyper-realistic visual experiences, inviting everyone to seamlessly step into non-existing spaces with unparalleled realism."

            },
            {
                title:"Luxury Virtual Staging",
                img:"/assets/rawImg4.jpg",
            discription:"Enter a new era of property excellence with our pioneering 360° CGI solutions. Seamlessly blending non-existent spaces, we create a mesmerizingly authentic experience, ensuring unparalleled allure and satisfaction for your clients. Bid farewell to costly show homes and static models—our immersive 360° experience is available anytime, anywhere, on any device. Amplify brand impact, streamline sales, and erase post-construction uncertainties effortlessly. Our expert Digital CGI team crafts tailored, interactive 360° walkthroughs, unveiling your project's genuine potential",
           

            },
            {
                title:"360° Digital Staging",
                img:"/assets/rawImg3.jpg",
            discription:"Step into the pinnacle of refinement and sophistication with LetzStepIn's exquisite 360° Digital Staging Service—an unrivaled symphony of opulence and innovation in property enhancement. Embark on a captivating 72-hour odyssey, immersing yourself in the seamless fusion of avant-garde technology and artistic brilliance as we infuse unparalleled vitality into your space. Wave goodbye to the expense of renovations.",
            

            },
      ]
    return(
         <div className="container">
            {data.map((values,index)=>{
              return  <div key={index} className="row  pt-16 justify-between bg-white w-100 ">
              <h1 className='text-center py-5 text-[40px] text-[#36a2e0]'>{values.title}</h1>
                  <div className="col-12 col-md-5">
                      <img className='rounded-4 shadow' src={values.img} alt="" />
                  </div>
                  <div className="col-12 col-md-5">
                      <p className='text-justify fs-5'>{values.discription}</p>
                  </div>
              </div>
            })}
           
         </div>
    )
}