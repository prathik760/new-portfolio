import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from './Hero.jsx/Hero'
import About from './About.css/About'
import Services from './Services/Services'
import Skills from './Skills/Skills'
import Projects from './Projects/Projects'
import Feedback from './Feedback/Feedback'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer.jsx/Footer'
const App = () => {
  return (
    <>
    <div color='white'> 
    <Navbar />
    <Hero />
    <About />
    <Skills />
    <Services />
    <Projects />
    <Feedback />
    <Blog />
    <Contact />
    <Footer />
    </div>
    </>
  )
}

export default App