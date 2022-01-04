import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Api from './Api';

const Edit = () => {
    const navigate = useNavigate();
    const [value, setValue] = React.useState({
        title: '',
        price: ''
    });
    const { id } = useParams();
    const handleChange = (e) => {
        setValue({
            ...value,
            [e.target.name]: e.target.value
        });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        await Api.put(`/users/${id}`, value);
        navigate('/home');
    };
    useEffect(() => {
        const LoadData = async () => {
            const { data } = await Api.get(`/users/${id}`);
            setValue(data);
        };
        LoadData();
    }, [id]);

    return (
        <form onSubmit={(e) => handleSubmit(e)} key={value.id}>
            <input
                name="title"
                onChange={(e) => handleChange(e)}
                value={value.title}
                type="text"
            />
            <input
                name="price"
                onChange={(e) => handleChange(e)}
                value={value.price}
                type="text"
            />
            <button type="submit">update</button>
        </form>
    );
};

export default Edit;
