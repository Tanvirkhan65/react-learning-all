import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Users from './components/Users';

const App = () => {
    return (
        <div className="App">
            <Counter />
            <Users />
        </div>
    );
};

export default App;
