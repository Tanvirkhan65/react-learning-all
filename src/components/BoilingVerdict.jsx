import React from 'react';

const BoilingVerdict = ({ temperature }) => {
  if (temperature > 100) {
    return (
      <p>
        The water would boil.
        {temperature }
      </p>
    );
  } 
  return (
    <p>
      The water would not boil.
      {temperature }
    </p>
  );
};

export default BoilingVerdict;
