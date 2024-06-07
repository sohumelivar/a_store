export interface RegistrationSchema {
    username: string;
    email: string;
    password: string;
    secondPassword: string;
    firstname?: string;
    lastname?: string;
    age?: number | '';
    avatar?: File | '';
    isLoading?: boolean;
    error?: string | boolean;
}