/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react';
import { FaCheck } from 'react-icons/fa';
import 'animate.css';
import 'react-intersection-observer'; // Import polyfill if needed

// Import images
import BannerImg from '../../Images/KSBanner.jpg';
import aboutImg from '../../Images/AboutBannner.jpg';
import heroImg from '../../Images/kHeroBanner.jpg';
import svg1 from '../../Images/svg1.jpg';
import svg2 from '../../Images/svg2.jpg';
import svg3 from '../../Images/svg3.jpg';
import svg4 from '../../Images/svg4.jpg';
import svg5 from '../../Images/svg5.jpg';
import svg6 from '../../Images/svg6.jpg';
import p1 from '../../Images/worldchefp1.jpeg';
import p2 from '../../Images/worldchefp2.jpeg';
import p3 from '../../Images/worldchefp3.jpeg';
import p4 from '../../Images/product1.png';
import p5 from '../../Images/product5.png';
import p6 from '../../Images/P6.jpg';

import Footer from './Footer';
import Carousel from '../Carousel/Carousel';

const HomePage = () => {

  const [activeSection, setActiveSection] = useState(null);
  const sectionsRef = useRef({});

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0,
    });

    Object.keys(sectionsRef.current).forEach((key) => {
      observer.observe(sectionsRef.current[key]);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const featuresData = [
        {
          imgSrc: svg1,
          title: 'Powered by Safe & Environment Friendly Infrared Technology',
          description:
            'Infrared Cooktop ensures a faster way of cooking than in traditional induction-based cooktop as it uses 2000W advanced infrared technology. It gives you high performance capacity and a quality which satisfies your needs.',
        },
        {
          imgSrc: svg2,
          title: 'Compatible with All Kinds of Utensils',
          description:
            'Infrared technology allows you to use any kind of utensils to cook on the plate. From Ceramic to Stainless Steel Cookware will operate on the Infrared Cooktop.',
        },
        {
          imgSrc: svg3,
          title: 'Easy to Use 3 Preset Cooking Options',
          description:
            'Designed with 3-present menus, Infrared Cooktop lets you stir fry, barbeque, or make soup with just a simple touch of button. There also a function mode and timer settings that lets you adjust the temperature as your requirement.',
        },
        {
          imgSrc: svg4,
          title: 'Robust Construction For Durable Use',
          description:
            'To ensure a long-lasting use, Infrared Cooktop is made of high-quality ceramic infrared heating element that is not just durable but also adds elegance to your kitchen décor. It also has a stainless-steel frame that’s easy to clean.',
        },
        {
          imgSrc: svg5,
          title: 'Digital Function with LED Display',
          description:
            'Infrared features digital functions and LED display that not just makes it easy to use but also adds an elegant touch to your kitchen décor.',
        },
        {
          imgSrc:svg6,
          title: 'Auto Shut-off Feature for Overheating Protection',
          description:
            'Keeping in mind your utmost safety, Infrared Cooktop is designed with auto shut-off feature that immediately cuts off the power supply in case the appliance gets overheated.',
        },
  ];

  const specs = [
            { title: 'Product Name', value: 'Infrared Cooktop' },
            { title: 'Product Code', value: '116116' },
            { title: 'Input Power Supply', value: 'Single Phase 230 V AC, 50 Hz' },
            { title: 'Total Power Consumption', value: '2000 W' },
            { title: 'Net Weight', value: '2.44 kg' },
            { title: 'Product Dimension (mm)', value: '425 (L) x 300 (W) x 63 (H)' },
     ];
        
        
  const productData = [
            {
              imgSrc: p1,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK1100 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            {
              imgSrc: p2,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK1200 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            {
              imgSrc: p3,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK1100 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            {
              imgSrc: p4,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK2000 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            {
              imgSrc: p5,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK3000 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            {
              imgSrc: p6,
              title: 'INFRARED COOKTOP',
              description: 'MODEL NO : SK1001 ',
              features: [
                '3 preset menu',
                'Adjustable power mode',
                'Feather touch Control dial',
                'Infrared heating coil',
                'Made of high quality ceramic',
                'Stainless-steel frame that\'s easy to clean',
                'Suitable for all kinds of utensils'
              ]
            },
            
  ];
        

  return (
    <>

      {/* Main Banner Image */}
      <div className='w-full overflow-hidden' id="banner" ref={(el) => (sectionsRef.current['banner'] = el)}>
        <img 
          src={BannerImg} 
          alt="BannerImage" 
          className={`w-full h-auto ${activeSection === 'banner' ? 'animate__animated animate__fadeIn' : ''}`} 
        />
      </div>

      {/* About Details Section */}
      <div className="flex flex-col items-center justify-center px-4 md:px-12 py-8 md:flex-row sm:flex-col mx-auto lg:mt-10" id="about" ref={(el) => (sectionsRef.current['about'] = el)}>
        {/* Image on the left */}
        <div className="w-full md:w-1/2">
          <img 
            src={aboutImg} 
            alt="About Spalin Appliances" 
            className={`w-full h-auto rounded-lg ${activeSection === 'about' ? 'animate__animated animate__flipInY' : ''}`} 
          />
        </div>

        {/* Text on the right */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8">
          <h2 className="text-2xl font-bold mb-4">About Us</h2>
          <p className="text-gray-700 mb-4 text-3xl">
            <span className='text-red-600'>// K-Starr Appliances Inc.</span>is a premier provider of high-performance home appliances, engineered to enhance the comfort, convenience, and efficiency of modern living environments.
          </p>
          <p className="text-gray-700 text-xl">
          Welcome to K-Starr, a trailblazer in creating innovative appliances designed to transform your culinary experience. With an unwavering dedication to quality and precision, we focus on manufacturing and distributing a wide array of kitchen essentials, including induction cooktops, pressure cookers, and electric kettles. At K-Starr, we understand the essential role that kitchen appliances play in everyday life. Our products are thoughtfully crafted to integrate advanced technology with sleek designs, ensuring they not only meet but surpass the expectations of modern households. Whether you're an experienced cook or just starting out, our appliances are designed to streamline your cooking process while optimizing both efficiency and safety.
          </p>
        </div>
      </div>

      {/* Product Section */}
      <div className="py-8 px-4 mt-10" id="products" ref={(el) => (sectionsRef.current['products'] = el)}>
  <h1 className={`animate__animated text-5xl font-bold text-center mb-8 ${activeSection === 'products' ? 'animate__fadeInUp' : ''}`}>Products</h1>
  <div className="flex justify-center">
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
      {productData && productData.length > 0 ? (
        productData.map((product, index) => (
          <div  
            key={index}
            className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 space-y-4 w-full ${activeSection === 'products' ? 'animate__animated animate__fadeInUp' : ''}`}
          >
            <img
              src={product.imgSrc}
              alt={product.title}
              className="cursor-pointer w-full h-64 object-cover rounded-t-lg hover:scale-110 transition-transform duration-300 ease-in-out"
            />
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <p className="text-gray-700">{product.description}</p>

            {/* Features Section */}
            <h3 className="text-lg font-medium mt-4">Features</h3>
            <ul className="list-disc list-inside text-gray-600">
              {product.features && product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>

            {/* Enquiry Button */}
            <a
              href="https://wa.me/+918130405294" // Replace with your WhatsApp number
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            >
              <span>Enquiry Now</span>
            </a>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No products available</p>
      )}
    </div>
  </div>
</div>



      {/* Features Section */}
      <div className="container mx-auto px-16 py-16 rounded-sm shadow-md mt-20" id="features" ref={(el) => (sectionsRef.current['features'] = el)}>
        <h1 className={`text-5xl font-bold text-center mb-8 ${activeSection === 'features' ? 'animate__animated animate__fadeInUp' : ''}`}>Features</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuresData.map((feature, index) => (
            <div key={index} className={`flex flex-col items-center p-4 border rounded-lg shadow-lg ${activeSection === 'features' ? 'animate__animated animate__fadeInUp' : ''}`}>
              <img src={feature.imgSrc} alt={feature.title} className="w-32 h-32 mb-4" />
              <h2 className="text-xl font-semibold text-center mb-2">{feature.title}</h2>
              <p className="text-center">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Hero Banner Image */}
      <div className=' mt-10w-full overflow-hidden mt-20 hidden lg:block' id="hero" ref={(el) => (sectionsRef.current['hero'] = el)}>
        <img 
          src={heroImg} 
          alt="BannerImage" 
          className={`w-full lg:h-[700px] h-auto ${activeSection === 'hero' ? 'animate__animated animate__fadeInUp' : ''}`} 
        />
      </div>

      {/* Specifications Section */}
      <div className="p-8 md:p-16 lg:p-32 text-white shadow-sm mt-10" id="specs" ref={(el) => (sectionsRef.current['specs'] = el)}>
        <h1 className={`text-3xl md:text-4xl font-bold text-center mt-10 mb-14 text-black ${activeSection === 'specs' ? 'animate__animated animate__fadeInUp' : ''}`}>Specifications</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {specs.map((spec, index) => (
            <div
              key={index}
              className={`flex items-center p-4 rounded-md bg-gray-900 border-b-4 border-gray-700 ${activeSection === 'specs' ? 'animate__animated animate__fadeInUp' : ''}`}
            >
              <div className="flex-1 flex justify-between items-center">
                <div className="flex-1">
                  <h2 className="text-xl md:text-2xl font-semibold mb-2">{spec.title}</h2>
                  <p className="text-gray-300 text-sm md:text-base">{spec.value}</p>
                </div>
                <div className="ml-4 flex-shrink-0">
                  <FaCheck className="text-green-400 text-lg md:text-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Happy Clients Section */}
      <div className='mt-20 bg-gray-100 py-16 relative' id="happy-clients" ref={(el) => (sectionsRef.current['happy-clients'] = el)}>
        <h1 className={`text-center font-bold text-4xl mb-32 flex items-center justify-center relative ${activeSection === 'happy-clients' ? 'animate__animated animate__fadeInUp' : ''}`}>
          Happy Clients
        </h1>
        <Carousel />
      </div>

      {/* Footer Section */}
      <div className='py-8' id="footer">
        <Footer />
      </div>
    </>
  );
};

export default HomePage;
