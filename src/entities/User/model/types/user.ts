export interface User {
    id: number;
    username: string;
    error?: boolean;
    errorMessage?: string;
    emptyFields?: FilledDataSchema;
}

export interface UserSchema {
    authData?: User;
}

export interface FilledDataSchema {
    username: boolean,
    email: boolean,
    password: boolean,
}