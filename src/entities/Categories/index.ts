import { CategoriesState, Category, GetCategoriesError, } from "./model/types/Categories";
import { getCategories } from "./model/services/getCategories";
import categoriesReducer, { setCategory } from './model/slice/categoriesSlice';

export {
    CategoriesState,
    Category,
    getCategories,
    GetCategoriesError,
    categoriesReducer,
    setCategory,
}