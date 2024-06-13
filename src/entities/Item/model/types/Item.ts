export interface Item {
    id?: number;
    itemName: string;
    category?: string;
    description?: string;
    price?: number;
    onEdit?: boolean;
    isFavorite?: boolean;
}