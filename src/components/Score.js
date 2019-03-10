import React from 'react';

const Score = ({ score, highScore }) => {
  return (
  <div id='score'>
    <h1>Your Score: {score} || High Score: {highScore}</h1>
  </div>
  );
}

export default Score;