import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ServiceDetail from './pages/ServiceDetail';
import IndustryDetail from './pages/IndustryDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services/:slug" element={<ServiceDetail />} />
        <Route path="/industries/:slug" element={<IndustryDetail />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;