/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { FaArrowUp, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, FaWhatsapp, FaYoutube } from 'react-icons/fa';

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaArrowUp } from 'react-icons/fa';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
// import { MdLocationOn, MdPhone, MdEmail  } from 'react-icons/md';
// import image.
import logo2 from '../../Images/k_sLogo2.png'


const Footer = () => {

  useEffect(() => {
    // Create a script element
    const script = document.createElement('script');
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.setAttribute('data-use-service-core', '');
    script.defer = true;

    // Append the script to the body or the specific div
    document.body.appendChild(script);

    // Cleanup the script when the component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);


  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer 
      className="relative" 
      style={{
        backgroundImage: 'url("https://img.freepik.com/premium-photo/minimalist-kitchen-with-sleek-appliances-organized-cabinets-showcasing-modern-interior-design_35570-1297.jpg?w=900")',
        zIndex: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 opacity-50 backdrop-blur-3xl" style={{ zIndex: 0 }}></div>
      <div className="footer-area py-10 z-50 relative">
        <div className="container mx-auto">
          <div className="flex flex-wrap">
            <div className="w-full md:w-5/12 px-4">
              <div className="footer-content logo-footer">
                <div className="footer-head">
                  <div className="footer-logo">
                    <Link className="footer-black-logo" to="#">
                      <img src={logo2} alt="" className='w-80' />
                    </Link>
                  </div>
                  <p className="subs-p text-4xl mt-4 text-white">K-Starr Home Appliances</p>
                  <div className="subs-feilds">
                    <div className="suscribe-input">
                      <div className="subs-title mt-5 text-white">Service hotline</div>
                      <div className="subs-num text-4xl text-white">
                        <a href="tel:+918130405294">Call +918130405294</a>
                      </div>
                    </div>
                  </div>
                  <div className="subs-links flex space-x-4 mt-4">
                    <a href="https://www.facebook.com/Zhongshan-Katro-Electrical-Appliances-Co-Ltd-105244341527945">
                      <FaFacebookF className="text-blue-600" />
                    </a>
                    <a href="https://twitter.com/Katro26777767">
                      <FaTwitter className="text-blue-400" />
                    </a>
                    <a href="https://www.instagram.com/katro_induction_cooker">
                      <FaInstagram className="text-pink-600" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            {/* K-Starr Home Appliances */}
            <div className="w-full md:w-4/12 px-4">
              <div className="footer-content">
                <div className="footer-head">
                  <h4 className="text-lg font-bold text-white">K-Starr Home Appliances</h4>
                  <ul className="footer-list space-y-2 mt-4 font-semibold text-white">
                    <li><Link to="/" className="text-white hover:underline">Home</Link></li>
                    <li><Link to="/about" className="text-white hover:underline">About</Link></li>
                    <li><Link to="/products" className="text-white hover:underline">Product</Link></li>
                    <li><Link to="/contact" className="text-white hover:underline">Contact</Link></li>
                  </ul>
                </div>
              </div>
            </div>
            {/* Contact us */}
            <div className="w-full md:w-3/12 px-4">
              <div className="text-white p-4">
                <div className="flex flex-col items-start">
                  <div className="flex items-center mb-2">
                    <FaMapMarkerAlt className="mr-2 text-white" />
                    <span>Block BG, Sanjay Gandhi Transport Nagar, Delhi, 110042</span>
                  </div>
                  <div className="flex items-center mb-2">
                    <FaPhoneAlt className="mr-2 text-white" />
                    <span>Call: +918130405294</span>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-2 text-white" />
                    <span>smarthomeappliances84@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-area-bottom bg-black py-4">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <div className="w-1/2" style={{ zIndex: 0 }}>
              <div className="copyright text-white">
                <p>© 2025 K-STARR - A PART OF SHAHJAB GROUP</p>
              </div>
            </div>
            <div className="w-1/2 flex justify-end" style={{ zIndex: 0 }}>
              <div className="copyright flex items-center">
                <a target="_blank" rel="nofollow" href="https://viraladsmedia.com" className="flex items-center text-white hover:text-red-500">
                  <p className="ml-2 text-white">Created by: Viral Ads Media</p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>


{/* This is the telephone calling  */}
      <div className="fixed bottom-8 left-10 flex items-center">
  <a
    href="tel:+918130405294"
    className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
    target="_blank"
    rel="noopener noreferrer"
  >
    <img
      src="https://img.icons8.com/?size=100&id=53438&format=png&color=ffffff"
      alt="Call Icon"
      className="w-8 h-8"
    />
  </a>
</div>

   {/* WhatsApp Icon */}
   <div className="fixed bottom-24 right-10 flex flex-col items-center">
        <a
          href="https://wa.me/8130405294"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-transform duration-300"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp className="text-3xl" />
        </a>
      </div>

       {/* Scroll to Top Button */}
       <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600"
      >
        <FaArrowUp className="text-2xl" />
      </button>
    </footer>
    



  

  );
};

export default Footer;
