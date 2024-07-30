import { Item } from "entities/Item";

export interface FavoritesSchema {
    favorites: Item[];
    currentPage: number;
    totalPages: number;
    isLoadingFavorites: boolean;
    error: FavoritesError | null;
}

export interface FavoritesResponse {
    items: Item[];
    totalPages: number;
}

export interface FavoritesError {
    error: string;
}