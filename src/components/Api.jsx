import axios from 'axios';

const Api = axios.create({
    baseURL: 'http://localhost:3006/'
});

export default Api;
