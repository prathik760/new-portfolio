import React from 'react'
import img from '../Navbar/Logo.png'
import '../Navbar/Navbar.css'
const Logo = () => {
  return (
         <> 
         <div className='logoimg'> 
        <img src={img} alt='logo'></img></div>
         
        </>
  )
}

export default Logo