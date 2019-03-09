import React from 'react';

// An object that stores the various images of our cards, and gives them an id.


const Card = ({ name, id, src, onClick }) => {
  return (
    <img src={src} id={id} alt={name} onClick={onClick}></img>
  )
}

export default Card;