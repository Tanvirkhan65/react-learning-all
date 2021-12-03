import React, { useState } from 'react';

const Todo = () => {
    const [todos, setTodos] = useState('');
    const [warning, setWarning] = useState(null);
    const handleInput = (e) => {
        const inputValue = e.target.value;
        const warnings = inputValue.includes('.js') ? 'you need javaScript Skills' : null;
        setTodos(inputValue);
        setWarning(warnings);
    };
    return (
        <div>
            <p>{todos}</p>
            <p>
                <textarea
                    onChange={handleInput}
                    name="todo"
                    cols="30"
                    rows="10"
                    value={todos}
                />
            </p>
            <hr />
            <hr />
            <h1>{warning || 'good Choice'}</h1>
        </div>
    );
};

export default Todo;
