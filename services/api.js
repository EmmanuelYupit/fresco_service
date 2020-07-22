import axios from 'axios';
import global from '../store/global';

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
        byId: (id) => get(`/order/${id}`),
        add: (params) => {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${global.auth.token}`;
            return post(`/order`, params);
        },
        addProduct: (id, params) => {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${global.auth.token}`;
            return post(`/order/${id}`, params);
        },
        deleteProduct: (id, orderProductId) => {
            return axios.delete(`/order/${id}`, {
                headers: {
                    Authorization: `Bearer ${global.auth.token}`,
                },
                data: {
                    orderProductId,
                },
            });
        },
        deliver: (id, params) => {
            axios.defaults.headers.common[
                'Authorization'
            ] = `Bearer ${global.auth.token}`;
            return post(`/order/${id}/deliver`, params);
        },
    },
};
