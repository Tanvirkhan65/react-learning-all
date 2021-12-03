/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import './index.css';
// eslint-disable-next-line prefer-const
let state = []; // [0:[value,setter],1:[value,setter],2:[value,setter]]
let startIndex = 0;
const useState = (initialState) => {
    const index = startIndex++;
    if (state[index]) {
        return state[index];
    }
    const setter = (newState) => {
        state[index][0] = newState;
        render();
    };
    const value = [initialState, setter];
    state[index] = value;
    return value;
};
const App = () => {
    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };
    const decrement = () => {
        setCount2(count2 - 1);
    };
    return (
        <div>
            <button onClick={increment} type="button">
                {' '}
                b1 click
                {' '}
                { count }
                {' '}
                times
            </button>
            <button onClick={decrement} type="button">
                {' '}
                b2 click
                {' '}
                { count2 }
                {' '}
                times
            </button>
        </div>
    );
};
const render = () => {
    startIndex = 0;
    ReactDOM.render(
        <React.StrictMode>
            <App />
        </React.StrictMode>,
        document.getElementById('root'),
    );
};
render();
