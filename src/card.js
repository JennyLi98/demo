import React from "react";
import './card.css';

const Card = (props) => {
  return (
    <div className='te'>
      <img src={props.url} alt='cannot display'/>
      <h1>{props.name}  </h1>
      <h3>{props.description}</h3>
    </div>
  );
}


export default Card;
