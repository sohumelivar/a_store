export interface Item {
    id?: number;
    itemName: string;
    category?: string;
    description?: string;
    price?: number;
    onEdit?: boolean;
    isFavorite?: boolean;
    photos?: string[];
}

export interface ItemSchema {
    item: Item | null;
    isLoading: boolean;
    error: string | null;
}