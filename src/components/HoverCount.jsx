import React, { useContext } from 'react';
import themeContext from '../context/themeContext';

const HoverCount = () => {
  const context = useContext(themeContext);
  const { count, incrementCount } = context;
  return (
      <div>
          <h1 onMouseOver={incrementCount}>
              hover
              {count}
              yomes
              {' '}
          </h1>
      </div>
  );
};

export default HoverCount;
