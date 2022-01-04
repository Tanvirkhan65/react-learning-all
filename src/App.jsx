import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddTodo from './components/AddTodo';
import AllTodo from './components/AllTodo';
import Edit from './components/Edit';
import GlobalStyle from './styles/GlobalStyle';

const App = () => (
    <div className="App">
        <GlobalStyle />
        <Routes>
            <Route path="/" element={<AllTodo />} />
            <Route path="/home" element={<AllTodo />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/edit/:id" element={<Edit />} />
        </Routes>
    </div>
);

export default App;
