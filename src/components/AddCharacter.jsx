import { gql, useMutation } from '@apollo/client';
import React, { useState } from 'react';

const CREATE_PRODUCT = gql`
    mutation CreateProduct($name: String!, $price: Int!) {
        createProduct(record: { name: $name, price: $price }) {
            record {
                name
            }
        }
    }
`;
const AddCharacter = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [createProduct] = useMutation(CREATE_PRODUCT);
    const handleSubmit = (e) => {
        e.preventDefault();
        createProduct({
            variables: {
                name,
                price
            }
        });
        setName('');
        setPrice('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
            <button type="submit">submit</button>
        </form>
    );
};
export default AddCharacter;
