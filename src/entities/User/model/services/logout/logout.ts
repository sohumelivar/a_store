import { $api } from "shared/api/api";

export const logoutFunc = async () => {
    try {
        await $api.post('/user/logout');
        localStorage.removeItem('token');
    } catch (error) {
        console.log(error);
    }
}