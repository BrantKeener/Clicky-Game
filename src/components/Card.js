import React from 'react';

// An object that stores the various images of our cards, and gives them an id.


const Card = ({ name, src, key }) => {
  console.log(name);
  return (
    <img src={src} alt={name} key={key}></img>
  )
}

export default Card;