import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Navbar from './components/Landing/Navbar';
import Footer from './components/Landing/Footer';
import DealDetails from './components/services/DealDetails';
import Login from './components/auth/Login';
import Signup from './components/auth/Register';
import Raw from './components/services/Raw';
import TrackOrderService from './components/services/TrackOrder';
import Bot from './components/Landing/Bot';
import Individual from './components/services/Individual';
import Grouporder from './components/services/Grouporder';

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
        <Route path="/raw" element={<Raw />} />
         <Route path="/trackorder" element={<TrackOrderService />} />
           <Route path="/bot" element={<Bot />} />
            <Route path="/individual" element={<Individual />} />
             <Route path="/grouporder" element={<Grouporder />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
