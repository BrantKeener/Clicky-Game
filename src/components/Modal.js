import React from 'react';
import StartButton from './StartButton';

const Modal = (props) => {
  return (
    <div id='modal-bg'>
      <div id='modal'>
        {props.choice ? <p>Start</p> : <img id='explosion' src='./images/explosion.gif' alt='Explosion Gif'/>}
        <StartButton choice = {props.choice} onClick = {props.startClick}/>
      </div>
    </div>
  )
}

export default Modal;