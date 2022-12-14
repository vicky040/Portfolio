import './Footer.css'
import React from 'react';
import {FaGithub, FaHome , FaLinkedin, FaMailBulk, FaPhone} from 'react-icons/fa'
import Typical from 'react-typical'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaHome size={20} style={{color:"#fff" , marginRight:"2rem"}}/>
                    <div>
                        <p>NEW DELHI , INDIA</p>
                    </div>
                </div>
                <div className='phone'>
                <h4><FaPhone size={20} style={{color:"#fff" , marginRight:"2rem"}}/>+918769293125</h4>

                </div>
                <div className='email'>
                <h4><a href='https://mail.google.com/mail/'> <FaMailBulk size={20} style={{color:"#fff" , marginRight:"2rem"}}/>vickiitd3125@gmail.com </a></h4>

                </div>

               
            </div>
            <div className='right'>
                <h4>ABOUT ME</h4>
                <p><Typical loop={Infinity} steps={["My Name is Vicky Nehra . I Studied at IIT DELHI ." ,1000]}/> </p>
                <div className='social'>
               <a href='https://github.com/vicky040'><FaGithub size={20} style={{color:"#fff" , marginRight:"1rem"}} /></a>
               <a href='https://www.linkedin.com/in/vicky-nehra-09504023b/'> <FaLinkedin size={20} style={{color:"#fff" , marginRight:"1rem"}}/></a>
                </div>
            </div>

        </div>
          
    </div>
  );
}

export default Footer;
