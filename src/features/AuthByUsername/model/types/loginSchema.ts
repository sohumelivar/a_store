export interface LoginSchema {
    username: string;
    password: string;
    email: string;
    isLoading: boolean;
    error?: null | string;
}