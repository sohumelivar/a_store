export interface RegistrationSchema {
    username: string;
    password: string;
    secondPassword: string;
    firstname: string;
    lastname: string;
    age: number | null; 
    avatar: File | null;
};