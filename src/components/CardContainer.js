import React from 'react';

const CardContainer = (props) => {
  const {children} = props;
  console.log(children);
  return (
    <div>
      {children}
    </div>
  )
}

export default CardContainer;