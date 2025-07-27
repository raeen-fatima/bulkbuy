import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Navbar from './components/Landing/Navbar';
import Footer from './components/Landing/Footer';
import DealDetails from './components/services/DealDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Register';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/deals/:id" element={<DealDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;

 