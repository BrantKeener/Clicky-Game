import React from 'react';

// An object that stores the various images of our cards, and gives them an id.
const cardObj = {
  amos: {
    id: 0,
    src: './images/Amos.PNG',
  },
  Chrisjen: {
    id: 1,
    src: './images/Chrisjen.PNG',
  },
  Draper: {
    id: 2,
    src: './images/Draper.PNG',
  },
  Fred_Johnson: {
    id: 3,
    src: './images/Fred_Johnson.PNG',
  },
  Holden: {
    id: 4,
    src: './images/Holden.PNG',
  },
  Jump: {
    id: 5,
    src: './images/Jump.PNG',
  },
  Kamal: {
    id: 6,
    src: './images/Kamal.PNG',
  },
  Miller_Gun: {
    id: 7,
    src: './images/Miller_Gun.PNG',
  },
  Miller: {
    id: 8,
    src: './images/Miller.PNG',
  },
  Monster: {
    id: 9,
    src: './images/Monster.PNG',
  },
  Naomi: {
    id: 10,
    src: './images/Naomi.PNG',
  },
  Roci: {
    id: 11,
    src: './images/Roci.PNG',
  }
};

const Card = () => {
  return (
    <div>
      <img src={cardObj.amos.src} alt='Amos'/>
    </div>
  )
}

export default Card;