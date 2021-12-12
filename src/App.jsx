import React, { useCallback, useMemo } from 'react';
import './App.css';
import Button from './components/Button';
import ShowCount from './components/ShowCount';
import Title from './components/Title';

const App = () => {
    const [count, setCount] = React.useState(0);
    const [count2, setCount2] = React.useState(0);
    const incrementByOne = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []);
    const incrementByTwo = useCallback(() => {
        setCount2((prevCount) => prevCount + 2);
    }, []);
    const isEvenOrOdd = useMemo(() => {
        let i = 0;
        while (i < 1000000000) {
            // eslint-disable-next-line no-plusplus
            i++;
        }
        return count % 2 === 0;
    }, [count]);
    const isEvenOrOdd2 = () => count2 % 2 === 0;
    return (
        <div className="App">
            <h1>useCallback useMemo</h1>
            <Title />
            <ShowCount count={count} />
            <span>{isEvenOrOdd ? 'even' : 'odd'}</span>
            <Button incrementBy={incrementByOne}>increment by one</Button>
            <ShowCount count={count2} />
            <span>{isEvenOrOdd2() ? 'even' : 'odd'}</span>
            <Button incrementBy={incrementByTwo}>increment by two</Button>
        </div>
    );
};

export default App;
