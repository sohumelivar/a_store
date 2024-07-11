export interface Profile {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    age: number | null;
    avatar: File | null;
}

export interface ProfileSchema {
    user: Profile;
    isLoading: boolean;
    error: string | null;
}