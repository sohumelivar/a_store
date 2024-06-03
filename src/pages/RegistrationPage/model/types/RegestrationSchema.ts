import { User } from "entities/User";

export interface RegistrationSchema {
    id: number;
    username: string;
    email: string;
    password: string;
    secondPassword: string;
    firstname: string;
    lastname: string;
    age: number | null;
    avatar: File | null;
    error?: boolean;
    errorMessage?: string;
    accessToken?: string;
    user?: User;
};