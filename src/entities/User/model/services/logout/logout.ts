import { $api } from "shared/api/api";

export const logoutFunc = async () => {
    try {
        await $api.post('/user/logout', {}, {
            withCredentials: true
        });
    } catch (error) {
        console.log(error);
    }
}