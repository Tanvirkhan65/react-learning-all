import React from 'react';
import './App.css';
import LayoutOne from './components/LayoutOne';
import LayoutTwo from './components/LayoutTwo';

const App = () => (
    <div className="App">
        <h1>custom hook</h1>
        <LayoutOne />
        <LayoutTwo />
    </div>
);

export default App;
