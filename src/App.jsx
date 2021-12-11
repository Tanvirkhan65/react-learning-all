import React from 'react';
import './App.css';
// import Todo from './components/Todo';
import Todo2 from './components/Todo2';

const App = () => {
    const [show, setToggle] = React.useState(true);

    return (
        <div className="App">
            <h1>useEffect</h1>
            {/* <Todo /> */}
            <div>
                {show && <Todo2 />}
            </div>
            <p>
                <button type="button" onClick={() => setToggle((prevShow) => !prevShow)}>{show ? 'hide post' : 'show post' }</button>
            </p>
        </div>
    );
};

export default App;
