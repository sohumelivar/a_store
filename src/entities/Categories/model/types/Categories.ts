export interface Category {
    id?: number;
    name: string;
}

export interface CategoriesState {
    categories: Category[];
    category: string | null;
    isLoadingCategories: boolean;
    errorCategories: string | null;
}

export interface GetCategoriesError {
    message: string;
}