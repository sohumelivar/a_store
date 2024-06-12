export interface Item {
    id?: number;
    itemName: string;
    category?: string;
    description?: string;
    price?: number;
    photo?: string[];
    onEdit: boolean;
    isFavorite: boolean;
}