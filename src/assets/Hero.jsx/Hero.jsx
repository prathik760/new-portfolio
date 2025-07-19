import React from 'react';
import '../Hero.jsx/Hero.css';
import img from '../../assets/img/prathik.png';
import { Link } from 'react-scroll';
import Facts from '../facts/Facts';

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
              Thelkar Software
            </span>
            Developer
          </h1>

          <Facts />

          <div className='flex-center buttons-wrapper' id='new'>
            <Link to='project' smooth={true} className='btn' id='link'>My Projects</Link>
            <a 
              href='/Prathik_Thelkar_Resume.pdf' 
              download='Prathik_Thelkar_Resume.pdf' 
              className='btn primary' 
              id='link'
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
