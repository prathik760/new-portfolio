import React from 'react';
import './Footer.css';
import Logo from '../../Navbar/Logo';
import { Link } from 'react-scroll';
import Social from '../Social/Social';

const footTabs = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Skills', id: 'skills' },
  { name: 'Services', id: 'services' },
  { name: 'Projects', id: 'projects' },
  { name: 'Feedbacks', id: 'feedbacks' },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="center-content">
           
          <div className="footer-tabs">
            {footTabs.map((tab, index) => (
              <Link
                key={index}
                to={tab.id}
                spy={true}
                smooth={true}
                duration={500}
                className="tab"
              >
                <h4>{tab.name}</h4>
              </Link>
            ))}
          </div>
          <Social />
        </div>
        <div className="copyright">
          <p className="muted">Built with love by Prathik Thelkar ❤️</p>
          <p>&copy; 2025 All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
