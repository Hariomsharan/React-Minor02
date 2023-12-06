import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://minor02backend.onrender.com/'
});

export default instance;