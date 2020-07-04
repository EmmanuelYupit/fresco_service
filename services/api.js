import axios from 'axios';

const API_URL = 'https://fresco.herokuapp.com/api/v1';

axios.defaults.baseURL = API_URL;

const { get } = axios;

export default {
    product: {
        list: () => get(`/product`),
    },
};
