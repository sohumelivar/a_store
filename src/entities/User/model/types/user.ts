export interface User {
    id: number;
    username: string;
    error?: boolean;
}

export interface UserSchema {
    authData?: User;
}