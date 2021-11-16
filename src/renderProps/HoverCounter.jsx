import React from 'react';

const HoverCounter = ({ count, incrementCount }) => {
  return (
    <div>
      <h1 onMouseOver={incrementCount}>
        click heading
        {' '}
        {count}
        {' '}
        times
      </h1>
    </div>
  );
};

export default HoverCounter;
