import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Services from './pages/Services';
import Navbar from './components/Landing/Navbar';
import Footer from './components/Landing/Footer';
import DealDetails from './components/services/DealDetails';
// import DealsPage from './pages/DealsPage';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/services" element={<Services />} />
        <Route path="/deals/:id" element={<DealDetails />} />
        {/* Uncomment these routes when the components are ready */}
        {/* <Route path="/deals" element={<DealsPage />} /> */}
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/signup" element={<Signup />} /> */}
      </Routes>
      <Footer />
    </>
    
  );
};

export default App;
