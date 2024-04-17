import { City } from "shared/const/common";

export interface Profile {
    username: string;
    password: string;
    first: string;
    lastname: string;
    age: number;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}