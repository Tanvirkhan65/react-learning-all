import React from 'react';

const Clock = () => {
    const [clock, setClock] = React.useState(new Date());
    const intervalRef = React.useRef();
    const tick = () => {
        setClock(new Date());
    };
    React.useEffect(() => {
        intervalRef.current = setInterval(tick, 1000);
        return () => clearInterval(intervalRef.current);
    });
    return (
        <div>
            <h1>{clock.toLocaleTimeString('en-US')}</h1>
            <button
                onClick={() => clearInterval(intervalRef.current)}
                type="button"
            >
                click me

            </button>
        </div>
    );
};

export default Clock;
