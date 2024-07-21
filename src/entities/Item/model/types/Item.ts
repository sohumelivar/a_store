export interface Item {
    id?: number;
    itemName: string;
    category?: string;
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