// import react from "react";
import slide from "./image/slide1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import {
  faComputer,
  faLaptop,
  faLightbulb,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

function Why() {
  return (
    <div
      className=""
      style={{
        backgroundImage: `url(${slide})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "", // Adjust the height as needed
        // Add any other background-related styles here
      }}
    >
      <h1 className="text-white text-2xl text-center font-extrabold pt-5">
        Why Choose Us
      </h1>
      <div className="grid grid-cols-2 gap-10 md:grid-cols-4 my-2 mx-8 pt-5 text-center pb-8">
        <div className="ml-auto pl-5 ">
          <FontAwesomeIcon icon={faLaptop} className="text-blue-500 text-4xl" />

          <h3 class="text-white  mb-5 font-semibold">Quality</h3>
          <p class=" text-white">
            We prioritize quality in every aspect of our work, from materials to
            construction techniques. Your satisfaction is our measure of
            success.
          </p>
        </div>
        {/*--------- Innovation------------- */}
        <div className="align-middle">
          <FontAwesomeIcon
            icon={faLightbulb}
            className="text-blue-500 text-4xl"
          />

          <h3 class="text-white mb-5 font-semibold"> Innovation</h3>
          <p class="mb-3 text-white">
            We embrace the latest construction technologies and practices,
            ensuring efficiency and sustainability in our projects.
          </p>
        </div>
        {/*--------- Customer-Centric------------- */}
        <div className="align-middle">
          <FontAwesomeIcon
            icon={faComputer}
            className="text-blue-500 text-4xl"
          />

          <h3 class="text-white mb-5 font-semibold"> Customer Centric</h3>
          <p class="mb-3 text-white">
            Your needs and preferences are at the heart of what we do. We work
            closely with our clients to make their dreams a reality.
          </p>
        </div>

        {/*--------- Experienced Team------------- */}
        <div className="align-middle">
          <FontAwesomeIcon
            icon={faUserPlus}
            className="text-blue-500 text-4xl"
          />
          <h3 class="text-white mb-5 font-semibold"> Experienced Team</h3>
          <p class="mb-3 text-white">
            Our team of professionals brings a wealth of experience and
            expertise to every project, ensuring its success.
          </p>
        </div>
      </div>
    </div>
  );
}
export default Why;
