import axios from "axios";

const apiRef = axios.create({
    baseURL: 'http://127.0.0.1:8002/api/',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
    },
})

apiRef.interceptors.request.use(
    config => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    error => {
        return Promise.reject(error);
    }
);
export default apiRef;