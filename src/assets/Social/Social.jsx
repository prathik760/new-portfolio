import React from 'react';
import '../Social/Social.css';
import { FaInstagram, FaFacebook, FaXTwitter, FaLinkedin } from 'react-icons/fa6';

const socialLinks = [
  {
    name: 'LinkedIn',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/prathikthelkar/',
  },
  {
    name: 'Instagram',
    icon: <FaInstagram />,
    link: 'https://www.instagram.com/prathik___008/',
  },
  {
    name: 'Facebook',
    icon: <FaFacebook />,
    link: 'https://www.facebook.com/prathik.thelkar/',
  },
  {
    name: 'Twitter',
    icon: <FaXTwitter />,
    link: 'https://x.com/prathikthelkar',
  },
];

const Social = () => {
  return (
    <div className='flex handles-container'>
      {socialLinks.map((handle, index) => (
        <a
          key={index}
          href={handle.link}
          target='_blank'
          rel='noopener noreferrer'
          className='flex-center icon-wrapper'
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
