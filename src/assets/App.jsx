import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Hero from './Hero.jsx/Hero';
import About from './About.css/About';
import Experience from './Experience/Experience';
import Skills from './Skills/Skills';
import Services from './Services/Services';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import Footer from './Footer.jsx/Footer';
import Admin from '../admin/Admin';

const Portfolio = () => (
  <div>
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Services />
    <Projects />
    <Contact />
    <Footer />
  </div>
);

const App = () => (
  <Routes>
    <Route path="/" element={<Portfolio />} />
    <Route path="/admin" element={<Admin />} />
  </Routes>
);

export default App;
