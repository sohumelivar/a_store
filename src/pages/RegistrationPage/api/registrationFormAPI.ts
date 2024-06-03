import { $api } from "shared/api/api";
import { RegistrationSchema } from "../model/types/RegestrationSchema";
import { USER_LOCAL_KEY } from "shared/const/localstorage";

export const registrationFormAPI = async (props: RegistrationSchema) => {
    const response = await $api.post<RegistrationSchema>('/user/registrationForm', props);
    localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data.user));
    localStorage.setItem('token', response.data.accessToken);
    return response.data;
} 