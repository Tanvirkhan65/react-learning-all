import React, { useContext } from 'react';
import counterContext from '../context/counterContext';

const CounterC = () => {
    const { count, dispatch } = useContext(counterContext);
    return (
        <div>
            <h1>
                count from other comp:
                {count.count}
            </h1>
            <button
                onClick={() => dispatch({
                    type: 'increment',
                    value: 5,
                })}
                type="button"
            >
                inc by 5
            </button>
            <button
                onClick={() => dispatch({
                    type: 'decrement',
                    value: 5,
                })}
                type="button"
            >
                dec by 5
            </button>
            <h1>
                count from other comp:
                {count.count2}
            </h1>
            <button
                onClick={() => dispatch({
                    type: 'increment2',
                    value: 5,
                })}
                type="button"
            >
                inc2 by 5
            </button>
            <button
                onClick={() => dispatch({
                    type: 'decrement2',
                    value: 5,
                })}
                type="button"
            >
                dec2 by 5
            </button>
        </div>
    );
};

export default CounterC;
