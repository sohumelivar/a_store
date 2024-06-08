export interface RegistrationSchema {
    username: string;
    email: string;
    password: string;
    secondPassword: string;
    firstname?: string;
    lastname?: string;
    age?: number | string;
    isLoading?: boolean;
    error?: string | boolean;
    errorMessage?: string;
}