import React, { useState } from 'react';

const Todo = () => {
    const [titles, setTitles] = useState({
        title: '',
        description: '',
    });
    const { title, description } = titles;

    return (
        <div>
            <h1>{title}</h1>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitles({
                    ...titles,
                    title: e.target.value,
                })}
            />
            <h2>{description}</h2>
            <input
                type="text"
                value={description}
                onChange={(e) => setTitles({
                    ...titles,
                    description: e.target.value,
                })}
            />
        </div>
    );
};

export default Todo;
