import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCaretRight, faStar } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <section className="bg-black">
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-4 mx-8">
        

          <div className="">
            <h3 className='font-semibold text-blue-500 pt-5 text-2xl pb-5'>Gulf&nbsp;<span className="text-white">Crest</span></h3>
            <p className="text-white">
              Gulf Crest Builders LLc <br />
              123 Sheikh Zayed Road, Office #205<br />
              Al Garhoud Business Center<br />
              Dubai, United Arabs Emirates <br /><br />
              <strong>Phone:</strong> +1 5589 55488 55<br />
              <strong>Email:</strong> info@example.com<br />
            </p>
          </div>

          <div className="">
            <h4 className='text-blue-500 text-xl pt-5 font-semibold pb-5'>Useful Links</h4>
            <ul className='text-white'>
              <li> <a href="#index.html"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Home</a></li>
              <li> <a href="#about"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; About us</a></li>
              <li><a href="#services"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Services</a></li>
              <li> <a href="#projects"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Projects</a></li>
              <li> <a href="#contact"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Contact Us</a></li>
            </ul>
          </div>
          <div class="">
                    <h4 className='text-blue-500 text-xl pt-5 pb-5 font-semibold'>Our Services</h4>
                    <ul className='text-white'>
                        <li> <a href="#prj1"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp;
Design and Learn</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#prj2"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Renovations and Remodeling</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#prj3"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Contract Management</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#prj4"><FontAwesomeIcon icon={faCaretRight} className='text-white'/>&nbsp; Interior Design</a></li>
                    </ul>
                </div>
                <div class="">
                    <h4 className='text-blue-500 text-xl pt-5 font-semibold'>Our Social Networks</h4>
                    <p class="text-white">Cras fermentum odio eu feugiat lide par naso tierra videa magna derita valies
                    </p>
                    <div className="pr-5 pt-10" >
                        <a href="#"><FontAwesomeIcon icon={faFacebook} className="text-blue-500"/>&nbsp;&nbsp;</a>
                        <a href="#"><FontAwesomeIcon icon={faTwitter} className='text-blue-500'/>&nbsp;&nbsp;</a>
                        <a href="#"><FontAwesomeIcon icon={faLinkedin} className='text-blue-500'/>&nbsp;&nbsp;</a>
                        <a href="#"><FontAwesomeIcon icon={faInstagram} className=' text-blue-500'/>&nbsp;&nbsp;</a>
                    </div>
                </div>

</div>

</section>          
)
}
export default Footer;