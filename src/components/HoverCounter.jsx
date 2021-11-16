import React from 'react';
import themeContext from '../context/themeContext';

const HoverCounter = () => {
  return (
      <div>
          <themeContext.Consumer>
              {({ count, incrementCount }) => {
                return (
                    <h1 onMouseOver={incrementCount}>
                        this is hover counter
                        {count }
                    </h1>
                ); 
              }}
          </themeContext.Consumer>
      </div>
  );
};

export default HoverCounter;
