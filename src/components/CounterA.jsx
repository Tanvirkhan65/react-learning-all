import React, { useMemo } from 'react';
import counterContext from '../context/counterContext';
import CounterB from './CounterB';

const initialState = {
    count: 0,
    count2: 2,
};
const reducer = (state, action) => {
    switch (action.type) {
    case 'increment': return {
        ...state, count: state.count + action.value,
    };
    case 'decrement': return {
        ...state,
        count: state.count - action.value,
    };
    case 'increment2': return {
        ...state,
        count2: state.count2 + action.value,
    };
    case 'decrement2': return {
        ...state,
        count2: state.count2 - action.value,
    };
    default: return state;
    }
};
const CounterA = () => {
    const [count, dispatch] = React.useReducer(reducer, initialState);
    const value = useMemo(() => ({
        count, dispatch,
    }), [count]);
    return (
        <div>
            <h1>
                Count1:
                {' '}
                {count.count}
            </h1>
            <button
                onClick={() => dispatch({ type: 'increment', value: 1 })}
                type="button"
            >
                inc-1
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement', value: 1 })}
                type="button"
            >
                dec-1
            </button>
            <h1>
                Count2:
                {' '}
                {count.count2}
            </h1>
            <button
                onClick={() => dispatch({ type: 'increment2', value: 2 })}
                type="button"
            >
                inc-2
            </button>
            <button
                onClick={() => dispatch({ type: 'decrement2', value: 2 })}
                type="button"
            >
                dec-2
            </button>
            <counterContext.Provider value={value}>
                <CounterB />
            </counterContext.Provider>
        </div>
    );
};

export default CounterA;
