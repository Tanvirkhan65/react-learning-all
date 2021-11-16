import React from 'react';

const ClickCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <button type="button" onClick={incrementCount}>
        click
        {' '}
        {count }
        {' '}
        times
      </button>
    </div>
  );
};

export default ClickCounter;
