import { Category } from "entities/Categories";

export interface Item {
    id?: number;
    itemName: string;
    category?: Category;
    description?: string;
    price?: number;
    onEdit?: boolean;
    isFavorite?: boolean;
    photos?: string[];
    user?: User;
}

export interface ItemSchema {
    item: Item | null;
    isLoading: boolean;
    error: string | null;
}

export interface User {
    id: number;
    username: string;
    avatar: string | null;
}