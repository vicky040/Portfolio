import './WorkCard.css'
import React from 'react';


const WorkCard = (props) => {
  return (
   
            <div className='project-card'>
                <img className = 'image'src={props.imgsrc}alt='img'/>
                <h2 className='project-title'>{props.title}</h2>
                <div className='pro-details'>
                    <p>{props.text}</p>
                    <div className='pro-btns'>
                        <a href={props.view} className='btn'>Live Demo</a>
                       <a href={props.git} className='btn'>Github</a>
                    </div>
                </div>
            </div>
       
  );
}

export default WorkCard;
