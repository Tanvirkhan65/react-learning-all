import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userList } from '../redux/action/action';

const Users = () => {
    const { user, loading, error } = useSelector((state) => state.userReducer);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(userList());
    }, [dispatch]);
    let content = null;
    if (loading) {
        content = <div>Loading...</div>;
    } else if (error) {
        content = <div>{error}</div>;
    } else {
        content = (
            <ul>
                {user.map((users) => (
                    <li key={users.id}>{users.name}</li>
                ))}
            </ul>
        );
    }
    return <div>{content}</div>;
};

export default Users;
