import React from 'react'
import client1 from "./image/1.jpg"
import client2 from "./image/2.jpg"
import client3 from "./image/3.jpg"
import client4 from "./image/4.jpg"
import client5 from "./image/5.jpg"
import client6 from "./image/6.jpg"
import client7 from "./image/7.jpg"
import client8 from "./image/8.jpg"
import c1 from "./image/client-1.png"
import c2 from "./image/client-2.png"
import c3 from "./image/client-3.png"
import c4 from "./image/client-4.png"
import c5 from "./image/client-5.png"
import c6 from "./image/client-6.png"
import Testimonial from '../Testimonial/Testimonial'
 const Projects = () => {
  return (
    <div className='gap-5'>
      <h1 className=" font-extrabold text-center text-2xl pt-6 pb-6">Projects</h1>
      <div className='grid grid-cols-4 gap-5 pb-5 mx-8'>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client1} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client2} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client3} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client4} alt="client 1"/>

      </div>
      <div className='grid grid-cols-4 gap-5 mb-10 mx-8'>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client5} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client6} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client7} alt="client 1"/>
        <img className="rounded-tr-3xl rounded-bl-3xl" src={client8} alt="client 1"/>

      </div>
      {/* Client */}
      <div className='bg-blue-500'>
      <marquee id="marquee" direction="left" scrollamount="12" behavior="scroll"
                onmouseover="stopMarquee()" onmouseout="startMarquee()">

             <div className='grid grid-cols-6 gap-6 pt-5'>   

                    <div className=" align-items-center justify-content-center">
                        <img src={c1} alt="" className='w-1/2'/>
                    </div>

                    <div className=" align-items-center justify-content-center">
                        <img src={c2} alt="" className='w-1/2'/>
                    </div>

                    <div className="align-items-center justify-content-center">
                        <img src={c3} alt="" className='w-1/2'/>
                    </div>

                    <div className=" align-items-center justify-content-center">
                        <img src={c4} alt="" className='w-1/2'/>
                    </div>

                    <div className=" align-items-center justify-content-center">
                        <img src={c5} alt="" className='w-1/2'/>
                    </div>

                    <div className=" align-items-center justify-content-center">
                        <img src={c6} alt="" className='w-1/2'/>
                    </div>

                    </div>
            </marquee>
        </div>


      </div>
     
        
  )
}
 export default Projects;