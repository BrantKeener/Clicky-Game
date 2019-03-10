import React from 'react';
import StartButton from './StartButton';

const Modal = (props) => {
  return (
    <div id='modal-bg'>
      <div id='modal'>
        {props.choice ? 
        <div id='instructions-opening'>
        <p>The crew of the Roci are in trouble. It is up to you to help them out. By clicking on the cards, you are either:</p>
        <ol id='instruction-list'>
          <li>Rescuing Crew Members</li>
          <li>Incinerating Protomolucule Mutants</li>
        </ol>
        <p>However, you must not click the same card twice. This will give away the Roci's position, and open the crew to retaliation.</p>
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