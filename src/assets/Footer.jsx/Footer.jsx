import React from 'react';
import './Footer.css';
import { Link } from 'react-scroll';
import { FaLinkedin, FaGithub, FaInstagram, FaHeart } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const footerNav = [
  { name: 'Home', id: 'hero' },
  { name: 'About', id: 'about' },
  { name: 'Experience', id: 'experience' },
  { name: 'Skills', id: 'skills' },
  { name: 'Projects', id: 'projects' },
  { name: 'Contact', id: 'contact' },
];

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/prathikthelkar/' },
  { name: 'GitHub', icon: <FaGithub />, href: 'https://github.com/prathik760' },
  { name: 'Instagram', icon: <FaInstagram />, href: 'https://www.instagram.com/prathik___008/' },
  { name: 'Twitter', icon: <FaXTwitter />, href: 'https://x.com/prathikthelkar' },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer-inner">
      <div className="footer-top">
        <div className="footer-brand">
          <div className="footer-logo">PT<span>.</span></div>
          <p className="footer-bio">
            Full Stack Developer crafting high-performance web apps and AI-powered
            solutions. Available for freelance projects and full-time opportunities.
          </p>
          <div className="footer-socials">
            {socialLinks.map((s, i) => (
              <a
                key={i}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="icon-wrapper"
                aria-label={s.name}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="footer-nav-col">
          <h4 className="footer-col-title">Navigation</h4>
          <div className="footer-links">
            {footerNav.map((tab, i) => (
              <Link
                key={i}
                to={tab.id}
                spy={true}
                smooth={true}
                duration={500}
                className="footer-link"
              >
                {tab.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="footer-contact-col">
          <h4 className="footer-col-title">Get In Touch</h4>
          <div className="footer-contact-info">
            <a href="mailto:prathikthelkar760@gmail.com">prathikthelkar760@gmail.com</a>
            <a href="tel:+916361770366">+91 6361770366</a>
            <span>Bengaluru, Karnataka, India</span>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Prathik Thelkar. All rights reserved.</p>
        <p className="footer-made">
          Made with <FaHeart className="footer-heart" /> in Bengaluru
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
