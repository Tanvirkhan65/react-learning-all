import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Api from '../api/Api';
import useSync from '../hooks/useSync';

const Home = () => {
    const navigate = useNavigate();
    const {
        isLoading, isError, setIsLoading, setIsError
    } = useSync();
    const [getValue, setValue] = React.useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setIsLoading(true);
                const { data } = await Api.get('/users');
                setIsLoading(false);
                setValue(data);
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
                console.log(
                    `${error.response.statusText}-${error.response.status}`
                );
            }
        };
        getData();
        return () => { };
    }, [setIsLoading, setIsError]);
    const deletes = async (id) => {
        try {
            setIsLoading(true);
            await Api.delete(`/users/${id}`);
            setIsLoading(false);
            toast.success('Successfully deleted!');
            navigate('/home');
        } catch (error) {
            setIsError(true);
            setIsLoading(false);
            toast.error('something went wrong!');
            console.log(
                `${error.response.statusText}-${error.response.status}`
            );
        }
    };
    return (
        <div>
            <ToastContainer />
            {isLoading ? (
                <h1>loading...</h1>
            ) : (
                <div>
                    {isError ? (
                        <h1>Error!</h1>
                    ) : (
                        <div>
                            {getValue.map((item) => (
                                <div key={item.id}>
                                    <form>
                                        <input
                                            readOnly
                                            value={item.name}
                                            type="text"
                                        />
                                        <input
                                            readOnly
                                            value={item.email}
                                            type="text"
                                        />
                                        <input
                                            readOnly
                                            value={item.phone}
                                            type="text"
                                        />
                                        <button
                                            onClick={() => deletes(item.id)}
                                            type="button"
                                        >
                                            <Link to={`/home/${item.id}`}>
                                                delete
                                            </Link>
                                        </button>
                                        <button type="button">
                                            <Link to={`/edit/${item.id}`}>
                                                edit
                                            </Link>
                                        </button>
                                    </form>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Home;
