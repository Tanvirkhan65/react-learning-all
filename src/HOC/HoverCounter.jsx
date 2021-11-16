import React from 'react';
import WithCounter from './WithCounter';

const HoverCounter = ({ handleCounter, count }) => {
  return (
    <div>
      <button type="button" onClick={handleCounter}>
        click me
        {' '}
        { count }
      </button>
    </div>
  );
};

export default WithCounter(HoverCounter);
