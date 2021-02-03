import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://tinder-backend-app-demo.herokuapp.com'
})

export default instance;