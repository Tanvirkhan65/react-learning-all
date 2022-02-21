import axios from 'axios';
import actionTypes from '../types/actionTypes';

export const increment = (value) => {
    return {
        type: 'INCREMENT',
        payload: value
    };
};
export const decrement = (value) => {
    return {
        type: 'DECREMENT',
        payload: value
    };
};
export const userList = () => {
    return async (dispatch) => {
        try {
            dispatch({
                type: actionTypes.USER_REQUEST
            });
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            console.log('user', response.data);
            dispatch({
                type: actionTypes.USER_SUCCESS,
                payload: response.data
            });
        } catch (error) {
            dispatch({
                type: actionTypes.USER_FAILURE,
                payload: error.message
            });
        }
    };
};
