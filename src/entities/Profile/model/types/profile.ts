import { City } from "shared/const/common";

export interface Profile {
    first: string;
    lastname: string;
    age: number;
    city: City;
    username: string;
    avatar: string;
}

export interface ProfileSchema {
    data?: Profile;
    isLoading: boolean;
    error?: string;
    readonly: boolean;
}