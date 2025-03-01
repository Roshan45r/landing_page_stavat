import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import Contact from './pages/Contact/Contact';
import CommercialPaint from './pages/CommercialPaint/CommercialPaint';
import Residential from './pages/Residential/Residential';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path='/commercial' element={<CommercialPaint />} />
        <Route path='/residential' element={<Residential />} />
      </Routes>
    </Router>
  );
}

export default App;
