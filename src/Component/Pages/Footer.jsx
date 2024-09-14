/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-800 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Categories */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Our Categories</h3>
            <ul className="space-y-2">
              <li><Link to="/fans" className="hover:text-green-400 transition-colors">Infrared Cooktop</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">For any issues related to any products, give us a call or connect with us here:</p>
            <p className="mb-2">Call: <a href="tel:18004190505" className="hover:text-green-400 transition-colors">+918130405294</a></p>
            <p className="mb-4">Chat: <a href="https://wa.me/8178196053" className="hover:text-green-400 transition-colors">WhatsApp no: +918130405294</a></p>
            <p className="mb-4">Mail: <a href="mailto:smarthomeappliances84@gmail.com" className="hover:text-green-400 transition-colors">smarthomeappliances84@gmail.com</a></p>

            <div className="space-y-2">
              <h3 className="text-xl font-semibold">Sign up for K-Starr updates</h3>
              <p className="mb-4">Subscribe to our newsletter for the latest updates, products, and insights:</p>
              <input type="email" placeholder="Enter your email ID here" className="p-3 w-full max-w-xs text-black rounded-lg" />
              <button className="bg-green-500 text-white py-2 px-6 rounded-lg hover:bg-green-600 transition-colors">Subscribe</button>
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-4">Find us on</h3>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/Suryakstar" className="text-gray-400 hover:text-white transition-colors"><FaFacebookF size={28} /></a>
              <a href="https://www.instagram.com/sslightsdelhi/?next=%2Fguptaplastics_%2F" className="text-gray-400 hover:text-white transition-colors"><FaInstagram size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaYoutube size={28} /></a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedinIn size={28} /></a>
            </div>
          </div>
        </div>
      </div>

     {/* telephone */}
      <div className="fixed bottom-8 left-10 flex flex-col space-y-4">
        <a
          href="tel:+919335035215"
          className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://img.icons8.com/?size=100&id=53438&format=png&color=ffffff"
            alt="Call Icon"
            className="w-10 h-10"
          />
        </a>
        </div>

      {/* WhatsApp and Scroll to Top Buttons */}
      <div className="fixed bottom-8 right-10 flex flex-col space-y-4 items-center">
        {/* WhatsApp Icon */}
        <a
          href="https://wa.me/+918130405294"
          className="bg-green-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-4xl" />
        </a>

        {/* Scroll to Top Button */}
        <button
          onClick={handleScrollToTop}
          className="bg-blue-500 text-white p-2 rounded-full shadow-lg hover:bg-blue-600 transition-transform duration-300"
        >
          <FaArrowUp className="text-3xl" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
