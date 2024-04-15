export interface ItemSchema {
    id?: number;
    photo?: string[];
    itemName?: string;
    description?: string;
    price?: number;
    category?: string;
    onEdit?: boolean;
    isFavorite?: boolean;
}