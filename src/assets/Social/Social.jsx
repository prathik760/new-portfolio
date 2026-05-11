import React from 'react';
import './Social.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const socialLinks = [
  { name: 'LinkedIn', icon: <FaLinkedin />, link: 'https://www.linkedin.com/in/prathikthelkar/' },
  { name: 'GitHub', icon: <FaGithub />, link: 'https://github.com/prathik760' },
  { name: 'Instagram', icon: <FaInstagram />, link: 'https://www.instagram.com/prathik___008/' },
  { name: 'Twitter', icon: <FaXTwitter />, link: 'https://x.com/prathikthelkar' },
];

const Social = () => {
  return (
    <div className="handles-container flex">
      {socialLinks.map((handle, i) => (
        <a
          key={i}
          href={handle.link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-wrapper"
          aria-label={handle.name}
          title={handle.name}
        >
          {handle.icon}
        </a>
      ))}
    </div>
  );
};

export default Social;
