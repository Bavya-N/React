import React from "react";
import cons from "./about-img/construction-manage.jpg";
// import Why from "../why-Choose-Us/why-choose";
const AboutUs = () => {
  // Define the functions
  const changeDotBorder = () => {
    // Your logic for changing dot border
    console.log("Mouse over - Change Dot Border");
  };

  const restoreDotBorder = () => {
    // Your logic for restoring dot border
    console.log("Mouse out - Restore Dot Border");
  };
  return (
    <div>
      {/* Mission Section */}
      <div className="gap-1">
        <h2 className="py-5 text-center text-2xl ">
          Our<strong>&nbsp;  <span>Mission</span>
          </strong>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 py-8 gap-5 mx-8">
          <div className="relative h-full">
            <img
              src={cons}
              className="rounded-2xl  object-cover"
              alt="Construction Management"
            />
          </div>
          <div className=" ">
            <div className="grid grid-rows-2 gap-5 py-5 text-justify">
            <p className="">
              At Gulf Crest Builders, we are dedicated to shaping the future of
              construction in the Gulf region. With years of experience and a
              passionate team of experts, we have established ourselves as a
              reliable and innovative force in the construction industry. Our
              commitment to quality, cutting-edge technology, and unwavering
              dedication to our clients sets us apart.
            </p>
            <p className="">
              Our mission is to craft exceptional spaces that not only meet but
              exceed our clients' expectations. We take pride in our ability to
              turn visions into reality, delivering projects with the highest
              standards of quality and craftsmanship.
            </p>
            </div>
            <button
              className="bg-[#1da1f2] p-5 rounded-full "
              id="dot"
              onMouseOver={changeDotBorder}
              onMouseOut={restoreDotBorder}
            >
              Read More
            </button>
          </div>
        </div>
      </div>
      
      </div>
    
    // Why Choose Us
    
  );
  
};

export default AboutUs;
