import { $api } from "shared/api/api";
import { RegistrationSchema } from "../model/types/RegestrationSchema";
import { USER_LOCAL_KEY } from "shared/const/localstorage";

export const registrationFormAPI = async (props: RegistrationSchema) => {
    const response = await $api.post<RegistrationSchema>('/user/registrationForm', props, {
        withCredentials: true
    });
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data));
    return response.data;
} 