import React from 'react'
import '../Social/Social.css'
import { FaInstagram } from 'react-icons/fa6'
import { FaFacebook } from 'react-icons/fa6'
import { FaXTwitter } from 'react-icons/fa6'
import { FaLinkedin } from 'react-icons/fa6'
const social  = [

    {
        name : 'Linkedin',
        icon : <FaLinkedin />,
        link : 'https://www.linkedin.com/in/prathik-thelkar-93140429a',
    },
    {
        name : 'Instagram',
        icon : <FaInstagram/>,
        link : 'https://www.instagram.com/prathik___008/',
    },
    {
        name : 'Facebook',
        icon : <FaFacebook/>,
        link : 'https://www.facebook.com/prathik.thelkar/',
    },
    {
        name : 'Twitter',
        icon : <FaXTwitter/>,
        link : 'https://x.com/prathikthelkar',
    },
     
]

const Social = () => {
    return (
      <div className='flex handles-container'>
        {social.map((handle, index) => (
          <a href={handle.link} target='_blank' rel='noopener noreferrer' className='flex-center icon-wrapper' key={index}>
            {handle.icon}
          </a>
        ))}
      </div>
    );
  }
  
  export default Social;