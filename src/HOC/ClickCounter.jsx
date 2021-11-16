/* eslint-disable jsx-a11y/mouse-events-have-key-events */
import React from 'react';
import WithCounter from './WithCounter';

const ClickCounter = ({ handleCounter, count }) => {
  return (
    <div>
      <h1 onMouseOver={handleCounter}>
        hello count number here
        {count }
      </h1>
    </div>
  );
};

export default WithCounter(ClickCounter);
