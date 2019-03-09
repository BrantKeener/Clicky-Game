import React from 'react';

const Score = ({ score, highScore }) => {
  return (
  <div>
    <h1>Your Score: {score} || High Score: {highScore}</h1>
  </div>
  );
}

export default Score;