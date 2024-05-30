import { $api } from "shared/api/api";
import { RegistrationSchema } from "../model/types/RegestrationSchema";

export const registrationFormAPI = async (props: RegistrationSchema) => {
    const response = await $api.post<RegistrationSchema>('/user/registrationForm', props);
    return response.data;
} 