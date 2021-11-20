import React from 'react';
import './App.css';
import ClockList from './components/ClockList';

function App() {
  const quantities = [1, 2, 3, 4, 5, 6];
  return (
    <div className="App">
      <h1>hello</h1>
      <ClockList quantities={quantities} />
    </div>
  );
}

export default App;
