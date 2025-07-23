import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import HireExperts from './pages/HireExperts';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import AutomationAgent from './components/AutomationAgent';
import OurWork from './pages/OurWork';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/hire-experts" element={<HireExperts />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/automation-agent" element={<AutomationAgent />} />
          <Route path="/our-work" element={<OurWork />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;