/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';

// Import image.
import contactBanner from '../../Images/kContact.jpg';
import Footer from './Footer';

const ContactPage = () => {
  // State to manage form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzSXVaFJZyoWLovHkaVP_S8ix1iy7d4_-xf9zxG5xG0eJzsscqa7BuqiuXorbQmRal_pQ/exec';
    const form = document.forms['submit-to-google-sheet'];

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      setIsSubmitting(true); // Set submitting state to true

      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then((response) => {
          alert('Success!', response);
          // Reset the form after successful submission
          setFormData({
            name: '',
            email: '',
            message: ''
          });
          setIsSubmitting(false); // Set submitting state to false
        })
        .catch((error) => {
          alert('Error!', error.message);
          setIsSubmitting(false); // Set submitting state to false
        });
    });
  }, []); // Empty dependency array to ensure this runs only once when the component mounts.

  // Handle input change to update state
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      {/* Main image */}
      <div className="w-full overflow-hidden">
        <img src={contactBanner} alt="BannerImage" className="w-full h-auto" />
      </div>

      {/* Contact form and map section */}
      <div className="w-4/5 mx-auto mt-20 flex flex-col md:flex-row gap-8">
        {/* Contact Form */}
        <div className="md:w-1/2 w-full bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form name="submit-to-google-sheet">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
              <input
                name="name"
                type="text"
                id="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <input
                name="email"
                type="email"
                id="email"
                value={formData.email}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                id="message"
                value={formData.message}
                onChange={handleInputChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Enter your message"
                rows="4"
              ></textarea>
            </div>
            <button
              type="submit"
              className={`bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Send Message'}
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="md:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.3912275929997!2d77.146119!3d28.737734000000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d01b20e6a2e19%3A0x8aa5fc0b71887ad0!2sBajaj%20Enterprises!5e0!3m2!1sen!2sin!4v1726222642202!5m2!1sen!2sin"
            width="600"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Map"
          ></iframe>
        </div>
      </div>

      {/* Footer section */}
      <div className="mt-20">
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;
