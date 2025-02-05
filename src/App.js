import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import NotFound from './pages/NotFound';
import WhatsNext from './pages/WhatsNext';
import AboutUs from './pages/AboutUs';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/whats-next" element={<WhatsNext />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
