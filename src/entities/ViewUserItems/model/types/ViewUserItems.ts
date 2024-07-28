import { Item } from "entities/Item";

export interface ViewUserItemsSchema {
    viewUserItems: Item[] | null;
    currentPage: number;
    totalPages: number;
    isLoadingItems: boolean;
    error: getViewUserItemsErrors | null;
}

export interface ViewUserItemsResponse {
    items: Item[]
    totalPages: number;
}

export interface getViewUserItemsErrors {
    error: string;
}

export interface getViewUserItemsProps {
    page: number;
    viewUserId: number;
}