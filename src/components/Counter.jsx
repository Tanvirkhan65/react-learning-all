import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/action/action';

const Counter = () => {
    const count = useSelector((state) => state.counterReducer.count);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>Counter{count}</h1>
            <button onClick={() => dispatch(increment(50))} type="button">
                increment
            </button>
            <button onClick={() => dispatch(decrement(5))} type="button">
                decrement
            </button>
        </div>
    );
};

export default Counter;
