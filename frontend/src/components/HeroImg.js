import "./HeroImg.css"
import React from 'react';
import IntroImg  from '../assets/project1.png'
import { Link } from "react-router-dom";
import Typical from 'react-typical'
 
const HeroImg = () => {

    

  return (
    <div className="hero">
        <div className="mask">
           <img className="into-img" src={IntroImg} alt="IntroImg"/>
        </div>
        <div className="content">
            <p> Hi , I'M VICKY NEHRA</p>
            <h1>
              
             <Typical 
             loop={Infinity}
             steps={[
              "MERN Stack Developer." ,1000 , " NodeJs Developer." ,1000, "ReactJs Developer.",1000 ,
             ]}
             
             />
             
            </h1>
           
            <div>
                <Link to={'/project'} className='btn'>PROJECTS</Link>
                <Link to={'/resume'} className='btn btn-light'>Resume</Link>
            </div>
        </div>

       
    </div>
  );
}

export default HeroImg;
