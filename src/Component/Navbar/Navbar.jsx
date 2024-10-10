/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom';

// import image.
import logo from '../../Images/K_sLogo.png'

const Navbar = () => {
  
  const [isOpen, setIsOpen] = useState(false);

   // going on the top 
   const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-[#f0f0f0] text-black fixed w-full top-0 left-0 z-50 shadow-md ">
      <div className="container mx-auto flex items-center justify-between p-4 h-20">
        {/* Logo */}
        <div className="text-xl font-bold">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-52 h-52 sm:w-52 sm:h-52 md:w-40 md:h-40 lg:w-56 lg:h-56 ml-[-30px] lg:mt-4 lg:mb-4"
              />
            </Link>
        </div>


        {/* Hamburger Icon */}
        <div className="md:hidden relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-2xl"
          >
            {isOpen ? <FaTimes className="inline-block" /> : <FaBars className="inline-block text-black" />}
          </button>

          {/* Sliding Menu */}
          <div
            className={`fixed top-0 right-0 w-64 bg-[#f0f0f0] h-full transform ${
              isOpen ? 'translate-x-0' : 'translate-x-full'
            } transition-transform duration-300 ease-in-out shadow-lg`}
          >
            <div className="relative">
              {/* Close Icon */}
              {isOpen && (
                <button
                  onClick={() => setIsOpen(false)}
                  className="absolute top-0 right-4 text-white text-2xl"
                >
                  <FaTimes  className='text-black'/>
                </button>
              )}

              <div className="p-4 mt-5 relative top-4">
                <Link
                  to="/"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded "
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  HOME
                </Link>
                <Link
                  to="/products"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  PRODUCTS
                </Link>
                <Link
                  to="/about"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  ABOUT
                </Link>
                <Link
                  to="/contact"
                  className="block py-2 px-4 hover:bg-black  hover:text-white rounded"
                  onClick={() => {
                    setIsOpen(false);
                    handleScrollToTop();
                  }}
                >
                  CONTACT
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Menu for larger screens */}
        <div className="hidden md:flex md:items-center md:space-x-4 text-lg">
          <Link
            to="/"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            HOME
          </Link>
          <Link
            to="/products"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            PRODUCTS
          </Link>
          <Link
            to="/about"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            ABOUT
          </Link>
          <Link
            to="/contact"
            className="py-2 px-4 hover:bg-black  hover:text-white rounded font-semibold"
            onClick={handleScrollToTop}
          >
            CONTACT
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
