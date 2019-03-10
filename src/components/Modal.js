import React from 'react';
import StartButton from './StartButton';

const Modal = (props) => {
  return (
    <div id='modal-bg'>
      <div id='modal'>
        {props.choice ? 
        <div id='instructions-opening'>
        <p>The crew of the Roci are in trouble. It is up to you to help them out.</p>
        <ol id='instruction-list'>
          <li>There are 12 unique cards.</li>
          <li>Click a card once and only once.</li>
        </ol>
        <p>If you click the same card twice, you will lose, however if you are able to sequentially pick all 12 cards without any repetition, you win!</p>
        <p>Good Luck!</p>
        </div>
        : (props.winScore === 12 ? 
          <div>
            <p>Helluva job!</p>
            <img id='win' src='./images/win.gif' alt='Win Gif'/>
          </div> 
        : <img id='explosion' src='./images/explosion.gif' alt='Explosion Gif'/>)}
        <StartButton choice = {props.choice} onClick = {props.startClick}/>
      </div>
    </div>
  )
}

export default Modal;