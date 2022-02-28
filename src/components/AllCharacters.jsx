import { gql, useQuery } from '@apollo/client';
import React from 'react';
import { Link } from 'react-router-dom';

const GET_ALLCHARACTER = gql`
    query {
        characters {
            results {
                id
                name
                image
                gender
            }
        }
    }
`;
const AllCharacters = () => {
    const { data, loading, error } = useQuery(GET_ALLCHARACTER);
    let jsx;
    if (loading) {
        jsx = <div>loading...</div>;
    } else if (error) {
        jsx = <div>{error.message}</div>;
    } else if (data) {
        jsx = data.characters.results.map((character) => (
            <div key={character.id}>
                <Link to={`/allcharacters/${character.id}`}>
                    <img src={character.image} alt={character.name} />
                </Link>
                <h2>{character.name}</h2>
                <p>{character.gender}</p>
            </div>
        ));
    }
    return <div>{jsx}</div>;
};

export default AllCharacters;
