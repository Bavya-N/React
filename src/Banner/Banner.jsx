import React, { useState, useEffect } from "react";
import slide1 from "./image/promotion.jpg";
import slide2 from "./image/pexels-photo-8482825.jpeg";

const Slideshow = () => {
  const slides = [slide1, slide2];
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Increment the current slide index
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(intervalId);
  }, [currentSlide, slides.length]);

  return (
    <div className="relative">
      <img
        className="h-full w-full object-cover"
        src={slides[currentSlide]}
        alt={`slide ${currentSlide + 1}`}
      />
      {/* <p className="absolute">Gulf Curst</p> */}
    </div>
  );
};

export default Slideshow;
