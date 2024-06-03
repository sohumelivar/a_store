import axios from "axios";

// export const $api = axios.create({
//     baseURL: 'http://192.168.1.55:5000/api',
//     headers: {
//         'Authorization': `test1`
//     }
// });     

export const $api = axios.create({
    baseURL: 'http://localhost:5000/api',
    withCredentials: true,
    // headers: {
    //     'Authorization': `Bearer ${localStorage.getItem('token')}`
    // }
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
        console.log('originalRequest --- >>> ', originalRequest);

        if (error.response.status === 401) {
            const response = await axios.get('http://localhost:5000/api/user/refresh', { withCredentials: true });
            localStorage.setItem('token', response.data.accessToken);
            return $api.request(originalRequest);
        }
    } catch (error) {
        console.log(error);

    }
})