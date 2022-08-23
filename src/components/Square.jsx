import React from 'react';
// import { Logger } from 'sass';

const Square = ({ value, onClick, isWinningSquares }) => {
  return (
    <button
      type="button"
      className={`square ${isWinningSquares ? 'winnig' : ''} ${
        value === 'X' ? 'text-green' : 'text-orange'
      }`}
      onClick={onClick}
      style={{ fontWeight: isWinningSquares ? 'bold' : 'normal' }}
    >
      {value}
    </button>
  );
};

export default Square;
