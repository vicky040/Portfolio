import './AboutContent.css'
import React from 'react';
import { Link } from 'react-router-dom';
import React1 from '../assets/react1.png'
import Node1 from '../assets/node1.png'
import Typical from 'react-typical'

const AboutContent = () => {
  return (
    <div className='about'>
        <div className='left'>
          <h1>Who Am I ?</h1>
          <p> <Typical loop={Infinity} steps={["I'm a MERN Stack Developer . I create responsive and secure Websites ." ,1000]}/> </p>
          <Link to="/project">
            <button className='btn'>PROJECT</button>
          </Link>
        </div>
        <div className='right'>
           <div className='img-container'>
            <div className='img-stack top'>
                <img src={React1} className='img' alt='true'/>
            </div>
            <div className='img-stack bottom'>
                <img src={Node1} className='img' alt='true'/>
            </div>
           </div>
        </div>
      
    </div>
  );
}

export default AboutContent;
