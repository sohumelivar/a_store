import axios from "axios";

export const $api = axios.create({
    baseURL: 'http://localhost:5001/api',
    withCredentials: true,
});

$api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

$api.interceptors.response.use((config) => {
    return config;
}, async (error) => {
    try {
        const originalRequest = error.config;
        if (error.response.status === 401) {
            const response = await axios.get('http://localhost:5001/api/user/refresh', { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        } else if (error.response.status === 400) {
            return Promise.reject(error);
        }
    } catch (error) {
        console.log(error);
    }
})