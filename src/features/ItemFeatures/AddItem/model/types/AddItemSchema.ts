import { Item } from "entities/Item";

export interface AddItemSchema {
    item: Item;
    userId: number | null;
    isLoading: boolean;
    error: string | null;
}