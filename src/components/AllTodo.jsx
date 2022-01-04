import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Api from './Api';

const AllTodo = () => {
    const [value, setValue] = React.useState([]);
    const LoadData = async () => {
        const { data } = await Api.get('/users');
        setValue(data);
    };
    const deleteTodo = async (id) => {
        await Api.delete(`/users/${id}`);
        LoadData();
    };
    useEffect(() => {
        LoadData();
    }, []);
    return (
        <div>
            {value.map((item) => (
                <form key={item.id}>
                    <input value={item.title} type="text" />
                    <input value={item.price} type="text" />
                    <button type="button">
                        <Link to={`/edit/${item.id}`}>Edit</Link>
                    </button>
                    <button onClick={() => deleteTodo(item.id)} type="button">
                        <Link to="/home">delete</Link>
                    </button>
                </form>
            ))}
        </div>
    );
};

export default AllTodo;
