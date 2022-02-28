import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AllCharacters from './components/AllCharacters';
import Characters from './components/Characters';

const App = () => {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<AllCharacters />} />
                <Route path="/allcharacters" element={<AllCharacters />} />
                <Route path="/allcharacters/:id" element={<Characters />} />
            </Routes>
        </div>
    );
};

export default App;
