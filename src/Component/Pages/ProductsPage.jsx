/* eslint-disable no-unused-vars */
import React, { useEffect, useRef, useState } from 'react'
import { FaCheck } from 'react-icons/fa';

// import image.
import pBanner from '../../Images/pBanner.jpg';
import p1 from '../../Images/worldchefp1.jpeg';
import p2 from '../../Images/worldchefp2.jpeg';
import p3 from '../../Images/worldchefp3.jpeg';
import p7 from '../../Images/worldchefp4.png';
import p8 from '../../Images/worldchefp5.png';
import p9 from '../../Images/kproductp6.png';
import p12 from '../../Images/worldchefp7.png';
import p4 from '../../Images/p2.jpg';
import p10 from '../../Images/p3.jpg';
import p5 from '../../Images/P4.jpg';
import p11 from '../../Images/kp1.jpg';
import p6 from '../../Images/P6.jpg';


// import footer here.
import Footer from './Footer';

// import animate.
import 'react-intersection-observer'; // Import polyfill if needed
import 'animate.css';

// This is for the product carousel 
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel CSS



const ProductsPage = () => {

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

  // This is the product data.
const productData = [
  {
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
    ],
    carouselImages: [
      p1,
      p7,
      
      
    ]
  },
  {
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
    ],
    carouselImages: [
     
      p2,
      p8
    ]
  },
  {
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
    ],
    carouselImages: [
      p3,
      p9
    ]
  },
  {
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
    ],
    carouselImages: [
      p4,
      p10
    ]
  },
  {
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
    ],
    carouselImages: [
      p5,
      p11
    ]
  },
  {
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
    ],
    carouselImages: [
      p6,
      p12
    ]
  },
  // Add other products similarly...
];


  const specs = [
    { title: 'Product Name', value: 'Infrared Cooktop' },
    { title: 'Product Code', value: '116116' },
    { title: 'Input Power Supply', value: 'Single Phase 230 V AC, 50 Hz' },
    { title: 'Total Power Consumption', value: '2000 W' },
    { title: 'Net Weight', value: '2.44 kg' },
    { title: 'Product Dimension (mm)', value: '425 (L) x 300 (W) x 63 (H)' },
  ];


  const data = [
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon1_200x200.png?v=1634793132",
      title: "No Chemical",
      description: "It is easy to clean with simple methods like wiping with a damp cloth. This reduces the need for chemical cleaners that may contain harsh ingredients, further minimizing chemical usage in the kitchen.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon2_200x200.png?v=1634793143",
      title: "Earth Friendly",
      description:"Induction cooking does not emit pollutants or harmful gases during operation, contributing to better indoor air quality and a healthier home environment.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon3_200x200.png?v=1634793151",
      title: "Recyclable Product",
      description:"These are durable and designed to last for many years with proper care. Their longevity reduces frequency of disposal and replacement compared to traditional stoves, which decreases overall waste generation.",
    },
    {
      imgSrc: "https://cooky-theme.myshopify.com/cdn/shop/files/icon4_200x200.png?v=1634793159",
      title: "Sturdy & Durable",
      description:"The durable materials used in induction cooktops also contribute to easier maintenance. They are resistant to stains, corrosion, and chemical damage, requiring minimal effort to keep clean and in good condition.",
    },
  ];



  return (
    <>
    
    {/* Main Banner Image */}
    <div className='w-full overflow-hidden' id="banner" ref={(el) => (sectionsRef.current['banner'] = el)}>
        <img 
          src={pBanner} 
          alt="BannerImage" 
          className={`w-full h-auto ${activeSection === 'banner' ? 'animate__animated animate__fadeIn' : ''}`} 
        />
    </div>

   
    {/* This is the product section */}
    <div className="py-8 px-4 mt-10" id="products" ref={(el) => (sectionsRef.current['products'] = el)}>
      <h1 className={`animate__animated text-5xl font-bold text-center mb-8 ${activeSection === 'products' ? 'animate__fadeInUp' : ''}`}>Products</h1>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-8">
          {productData && productData.length > 0 ? (
            productData.map((product, index) => {
              return (
                <div
                  key={index}
                  className={`bg-white shadow-lg rounded-lg overflow-hidden flex flex-col items-center p-6 space-y-4 w-full ${activeSection === 'products' ? 'animate__animated animate__fadeInUp' : ''}`}
                >
                  {/* Carousel */}
                  <Carousel
                    showThumbs={false}
                    infiniteLoop={true}
                    showStatus={false}
                    // autoPlay={true}
                    interval={3000}
                    className="w-full h-64"
                  >
                    {product.carouselImages.map((imgSrc, i) => (
                      <div key={i}>
                        <img
                          src={imgSrc}
                          alt={`Slide ${i + 1}`}
                          className="w-full h-64 object-cover rounded-t-lg"
                        />
                      </div>
                    ))}
                  </Carousel>

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
              );
            })
          ) : (
            <p className="text-center text-gray-500">No products available</p>
          )}
        </div>
      </div>
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

    {/* This details section */}
    <div className="w-full p-4 h-full bg-[#F5EDE7]" id="details" ref={(el) => (sectionsRef.current['details'] = el)}>
      <h1 className={` text-center text-4xl font-bold mb-8 mt-10 ${activeSection === 'details' ? 'animate__animated animate__fadeInUp' : ''}`} >
        Designed for Better Cooking <br /> Experience
      </h1>
      <div className={`flex flex-wrap sm:flex-wrap lg:flex-nowrap justify-center items-center space-x-6 ${activeSection === 'details' ? 'animate__animated animate__fadeInUp' : ''}`}>
        {data.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center p-4 text-center max-w-xs"
          >
            <img src={item.imgSrc} alt={item.title} className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-600 text-lg">{item.description}</p>
          </div>
        ))}
      </div>
    </div>


    <div className='mt-10'>
      <Footer/>
    </div>


    </>
  )
}

export default ProductsPage