import React, { useEffect, useState } from 'react';

const Todo2 = () => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    const tick = () => {
        console.log('clock tick');
        setDate(new Date());
    };
    useEffect(() => {
        console.log('useEffect title');
        document.title = `You clicked ${count} times`;
    }, [count]);
    useEffect(() => {
        console.log('useEffect date');
        const interval = setInterval(tick, 1000);
        return () => clearInterval(interval);
    }, []);
    const increment = () => {
        setCount((prevCount) => (prevCount + 1));
    };
    return (
        <div>
            <h1>{date.toLocaleTimeString('bn-BD') }</h1>
            <h1>
                count
                {' '}
                {count}
                {' '}
                times
            </h1>
            <button type="button" onClick={increment}>click </button>
        </div>
    );
};

export default Todo2;
