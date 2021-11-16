/* eslint-disable max-len */
import React from 'react';
import './App.css';
import ClickCounter from './renderProps/ClickCounter';
import Counter from './renderProps/Counter';
import HoverCounter from './renderProps/HoverCounter';
import User from './renderProps/User';

function App() {
  return (
    <div className="App">
      <h1>render prop</h1>
      <User name={(isLogged) => { return (isLogged ? 'hello' : 'not render'); }} />
      
      <Counter>
        {(count, incrementCount) => {
          return (
            <ClickCounter count={count} incrementCount={incrementCount} />
          ); 
        }}
      </Counter>
      <Counter>
        {(count, incrementCount) => {
          return (
            <HoverCounter count={count} incrementCount={incrementCount} />
          ); 
        } }
      </Counter>
      
    </div>
  );
}

export default App;
