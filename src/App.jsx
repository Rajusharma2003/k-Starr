/* eslint-disable no-unused-vars */
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar'; // Import your Navbar component
import HomePage from './Component/Pages/HomePage';
import ProductsPage from './Component/Pages/ProductsPage';
import AboutPage from './Component/Pages/AboutPage';
import ContactPage from './Component/Pages/ContactPage';


const App = () => (

  <Router>
    <div>
      <Navbar />
      <div className="pt-20">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      </div>
    </div>
  </Router>
  
);


export default App;
