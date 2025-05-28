import React from 'react'
import '../Hero.jsx/Hero.css'
import img from '../../assets/img/prathik.png'
import { Link } from 'react-scroll'
import Facts from '../facts/Facts'
const Hero = () => {
  return (
    <section id='hero' className='flex blur-effect'>
      <div className='container'>
        <div className='column hero-image'>
          <img src={img} alt='Hero' />
        </div>
        <div className='column hero-text'>
          <h1 className='heading-1'>
            Hello I'm Prathik  
            <span className='gradient-text'>
              Thelkar Frontend
            </span>
            Developer
          </h1>
 
          <Facts />
          <div className='flex-center buttons-wrapper' id='new'>
            <Link to='project' smooth={true} className='btn' id='link' >My Projects</Link>
            <Link to='contact' smooth={true} className='btn primary' id='link'>Hire me</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;