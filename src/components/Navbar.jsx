import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // For burger and close icons
import DateTimeWeather from './DateTimeWeather'; // Import the DateTimeWeather component

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-gray-800 text-white fixed w-full z-50 top-0 shadow-md">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Left Side: Brand Name */}
        <a href="#home" className="font-bold text-xl md:text-xl hover:text-yellow-400 transition-colors duration-300">
          Aditya's Portfolio
        </a>

        {/* Centered Date, Time, and Weather */}
        <div className="flex-1 flex justify-center items-center text-center">
          <DateTimeWeather />
        </div>

        {/* Burger Menu Icon */}
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-2xl hover:text-yellow-400 transition-colors duration-300">
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Links for Large Screens */}
        <div className="hidden lg:flex space-x-6">
          <a href="#about" className="relative group text-lg transition-colors duration-300">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            About
          </a>
          <a href="#projects" className="relative group text-lg transition-colors duration-300">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Projects
          </a>
          <a href="#contact" className="relative group text-lg transition-colors duration-300">
            <span className="absolute inset-x-0 bottom-0 h-1 bg-yellow-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            Contact
          </a>
        </div>

        {/* Mobile Menu */}
        <div className={`lg:hidden fixed top-0 right-0 bg-gray-800 text-white h-full w-64 transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
          <div className="flex justify-end p-4">
            <button onClick={toggleMenu} className="text-2xl hover:text-yellow-400 transition-colors duration-300">
              <FaTimes />
            </button>
          </div>
          <div className="flex flex-col items-center mt-16 space-y-6">
            <a href="#about" className="text-xl hover:text-yellow-400 transition-colors duration-300" onClick={toggleMenu}>About</a>
            <a href="#projects" className="text-xl hover:text-yellow-400 transition-colors duration-300" onClick={toggleMenu}>Projects</a>
            <a href="#contact" className="text-xl hover:text-yellow-400 transition-colors duration-300" onClick={toggleMenu}>Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
