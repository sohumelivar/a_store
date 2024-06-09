export interface User {
    id: number;
    username: string;
    isActivated: boolean;
}

export interface UserSchema {
    authData: User | null;
    isLoading: boolean;
    error: string | null;
}