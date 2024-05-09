/* eslint-disable */
import axios from "axios";
import router from '../router/index.js';
import {authStore} from '../store/auth';
const store = authStore()

const baseURL = '/https://jsonplaceholder.typicode.com'
const instance = axios.create({
    baseURL,
    timeout: 100000,
});  

instance.interceptors.request.use(
    function (config) {
        let user = JSON.parse(localStorage.getItem('user'));
        const auth_data = JSON.parse(localStorage.getItem('auth_data'))

        if (user && user.token) {
            config.headers.Authorization = "Bearer " + user.token
        }

        if (auth_data?.etm_auth_key) config.headers['etm-auth-key'] = auth_data.etm_auth_key

        return config;
    },
    function (error) {
        return Promise.reject(error);
    },
);

instance.interceptors.response.use(
    function (response) {
        return response;
    },
    async function (error) {
        if (error.response && error.response.status === 401) {
            await router.push('/')
        }
        return Promise.reject(error);
    },
);


export default instance;