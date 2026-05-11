import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from './Logo';
import { Link } from 'react-scroll';
import { FaBars } from 'react-icons/fa6';
import { FaTimes } from 'react-icons/fa';
import Social from '../assets/Social/Social';

const navTabs = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      {open && <div className="nav-overlay" onClick={() => setOpen(false)} />}

      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-logo">
          <Logo />
        </div>

        <div className={`nav-links ${open ? 'active' : ''}`}>
          <button className="nav-close icon-wrapper" onClick={() => setOpen(false)}>
            <FaTimes />
          </button>

          {navTabs.map((tab, i) => (
            <Link
              key={i}
              className="nav-tab"
              activeClass="active"
              to={tab.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setOpen(false)}
            >
              {tab.name}
            </Link>
          ))}
        </div>

        <div className="nav-right flex-center">
          <div className="nav-social">
            <Social />
          </div>
          <Link to="contact" smooth={true} duration={500} className="btn primary nav-cta">
            Hire Me
          </Link>
          <button className="icon-wrapper nav-menu" onClick={() => setOpen(true)}>
            <FaBars />
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
