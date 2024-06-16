import { Item } from "entities/Item";

export interface ItemsSchema {
    items: Item[] | null;
    currentPage: number;
    totalPages: number;
    isLoading: boolean;
    error: getItemsErrors | null;
}

export interface ItemsResponse {
    items: Item[]
    totalPages: number;
}

export interface getItemsErrors {
    error: string;
}