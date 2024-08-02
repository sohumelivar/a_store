export interface Category {
    id: number;
    category: string;
}

export interface CategoriesState {
    categories: Category[];
    isLoadingCategories: boolean;
    errorCategories: string | null;
}

export interface GetCategoriesError {
    message: string;
}