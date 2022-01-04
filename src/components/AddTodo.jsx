import React from 'react';
import { v4 } from 'uuid';
import Api from './Api';

const AddTodo = () => {
    const [value, setValue] = React.useState({
        id: v4(),
        title: '',
        price: ''
    });
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Api.post('/users', value);
    };
    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    onChange={(e) => handleChange(e)}
                    name="title"
                    type="text"
                    placeholder="title"
                />
                <input
                    onChange={(e) => handleChange(e)}
                    name="price"
                    type="text"
                    placeholder="price"
                />
                <button type="submit">submit</button>
            </form>
        </div>
    );
};

export default AddTodo;
