import React, { useState } from 'react'
import '../Navbar/Navbar.css'
import Logo from './Logo'
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa6'
import {FaTimes } from 'react-icons/fa'
import Social from '../assets/Social/Social';
 

const navTabs = [
  {
    name : 'Home',
    id  : 'hero'
  },
  {
    name : 'About',
    id  : 'about'
  },
  {
    name : 'Skills',
    id  : 'skills'
  },
  {
    name : 'Services',
    id  : 'services'
  },
  {
    name : 'Projects',
    id  : 'projects'
  },
  {
    name : 'Feedbacks',
    id  :  'feedbacks'
  },
   
]
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className='flex'>
      {open && <div className='sidebar-overlay' onClick={() => setOpen(false)} />}
      <div className='column flex-center'>
        <Logo />
      </div>
      <div className={`column flex-center tab-container ${open ? 'active' : ''}`} id='sidebar'>
        <div className='flex-center icon-wrapper' id='close-sidebar-btn' onClick={() => setOpen(false)}>
          <FaTimes />
        </div>
        {navTabs.map((tab, index) => (
          <Link
            className='flex-center tab'
            activeClass="active"
            to={tab.id}
            spy={true}
            smooth={true}
            offset={-300}
            duration={500}
            onClick={() => setOpen(false)}
            key={index}
          >
            <h4>{tab.name}</h4>
          </Link>
        ))}
      </div>
      <div className='column flex-center buttons-wrapper'>
        <Social />
         
        <div className='flex-center icon-wrapper' id='menu-btn' onClick={() => setOpen(true)}>
          <FaBars />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;