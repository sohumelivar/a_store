export interface ViewUserProfile {
    username: string;
    email: string;
    firstname: string;
    lastname: string;
    age: number | null;
    avatar: File | null;
}

export interface ViewUserProfileSchema {
    viewUserProfile: ViewUserProfile,
    isLoading: boolean;
    error: string | null;
    errorMessage?: string | null;
}