import React from 'react';

// An object that stores the various images of our cards, and gives them an id.


const Card = ({ name, id, src, onClick }) => {
  return (
    <div className='flip-card'>
        <div className='flip-card-inner'>
          <div className='flip-card-front'>
            <img src={src} id={id} alt={name} onClick={onClick}></img>
          </div>
          <div className='flip-card-back'>
            <img src={'./images/expanse-playing-card.png'} alt='Card Back'/>
        </div>
      </div>
    </div>
  )
}

export default Card;