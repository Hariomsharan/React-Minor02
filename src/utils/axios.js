import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://calm-oasis-79532.herokuapp.com/'
});

export default instance;