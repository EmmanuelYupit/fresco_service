import axios from 'axios';

const API_URL = 'https://fresco.herokuapp.com/api/v1';

axios.defaults.baseURL = API_URL;

const { get, post } = axios;

export default {
    auth: {
        signin: () =>
            post('/auth/signin', {
                uuid: '54123654320',
            }),
    },
    product: {
        list: () => get(`/product`),
        byId: (productId) => get(`/product/${productId}`),
    },
    order: {
        add: (params) => post(`/order`, params),
    },
};
