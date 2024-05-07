import axios from "axios";

export const $api = axios.create({
    baseURL: 'http://192.168.1.55:5000/api',
    headers: {
        'Authorization': `test1`
    }
});     