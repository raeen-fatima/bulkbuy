import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import Services from './pages/Services';
// import DealsPage from './pages/DealsPage';
// import Login from './pages/Login';
// import Signup from './pages/Signup';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/services" element={<Services />} />
      {/* <Route path="/deals" element={<DealsPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} /> */}
    </Routes>
  );
};

export default App;
