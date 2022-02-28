import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { useParams } from 'react-router-dom';

const GET_CHARACTER = gql`
    query getCharacter($id: ID!) {
        character(id: $id) {
            id
            name
            image
        }
    }
`;
const Characters = () => {
    const { id } = useParams();
    const { data } = useQuery(GET_CHARACTER, {
        variables: { id }
    });
    console.log(data);
    return (
        <div>
            <img src={data.character.image} alt="loading" />
            <h2>{data.character.name}</h2>
        </div>
    );
};

export default Characters;
