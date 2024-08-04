import { Category } from "entities/Categories";

export interface EditItemSchema {
    itemName: string;
    category: Category;
    description: string;
    price: number | null;
    photos: string[];
    isLoading: boolean;
    error: string | null;
    errorMessage?: string | null;
    itemId: number | null;
}