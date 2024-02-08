import React, { useState, useEffect } from "react";
// import {Link} from "react-router-dom"

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <nav
        className={`font-sans mx-auto p-4 flex items-center justify-between ${
          isScrolled ? " bg-black bg-opacity-70 text-white fixed top-0 w-full z-50" : "bg-gray-200"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          <a href="#" className="space-x-2 flex items-center">
            <span className="text-2xl text-blue-500 font-extrabold">Gulf</span>
            <span className="text-2xl text-blue-500 font-extrabold">Crest</span>
          </a>

          <div className="md:hidden">
            {/* Hamburger menu icon for small screens */}
            <button
              onClick={toggleMenu}
              className="text-blue-500 hover:text-blue-600 focus:outline-none"
            >
              &#9776;
            </button>
          </div>
        </div>

        <ul
          className={`flex flex-col font-sans items-center space-y-4 md:flex-row md:space-y-0 md:space-x-8 ${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:items-center justify-center`}
        >
  
          <li>
           <a href="index.html" className="text-blue-500 text-lg text-[14px]">
              Home
            </a>
          </li>
          <li>
           <a href="#" to="/AboutUscomp" className="hover:text-blue-600 text-[14px]">
              About&nbsp;Us
            </a>
          </li>
          <li>
            <a href="#services" className="hover:text-blue-600 text-[14px]">
              Services
            </a>
          </li>
          <li>
            <a href="#projects" className="hover:text-blue-600 text-[14px]">
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className="hover:text-blue-600 text-[14px]">
              Contact&nbsp;Us
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
