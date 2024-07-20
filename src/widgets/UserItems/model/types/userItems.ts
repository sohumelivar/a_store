import { Item } from "entities/Item";

export interface UserItemsSchema {
    items: Item[] | null;
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    error: getUserItemsError | null;
}

export interface UserItemsResponse {
    items: Item[]
    totalPages: number;
}

export interface getUserItemsError {
    error: string;
}

export interface GetUserItemsProps {
    userId: number;
    page: number;
}