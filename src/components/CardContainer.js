import React from 'react';

const CardContainer = (props) => {
  const {children} = props;
  return (
    <div id='card-container'>
      {children}
    </div>
  )
}

export default CardContainer;