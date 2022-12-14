import './Header.css'

import React from 'react';
import image from '../assets/cv-1.jpg'

const Header = () => {
  return (
    <div className='Resume'>
       <img className='Resume-img' src={image} alt='resume'/>
    </div>
  );
}

export default Header;
