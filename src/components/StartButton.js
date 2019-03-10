import React from 'react';

const Button = (props) => {
  return (
    <div>
      <button id='start' name='start' onClick={props.onClick}>Start</button>
    </div>
  )
}

export default Button;