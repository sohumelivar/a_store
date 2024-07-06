export interface EditItemSchema {
    itemName: string;
    category: string;
    description: string;
    price: number | null;
    photos: string[];
    isLoading: boolean;
    error: string | null;
    errorMessage?: string | null;
    itemId: number | null;
}