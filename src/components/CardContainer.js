import React from 'react';

const CardContainer = (props) => {
  const {children} = props;
  return (
    <div>
      {children}
    </div>
  )
}

export default CardContainer;