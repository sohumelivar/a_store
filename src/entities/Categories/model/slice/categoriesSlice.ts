import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CategoriesState, Category } from '../types/Categories';
import { getCategories } from '../services/getCategories';

const initialState: CategoriesState = {
    categories: [],
    isLoadingCategories: false,
    errorCategories: null,
    category: null,
};

const categoriesSlice = createSlice({
    name: 'categories',
    initialState,
    reducers: {
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        }, 
    },
    extraReducers: (builder) => {
        builder.addCase(getCategories.pending, (state) => {
            state.isLoadingCategories = true;
        });
        builder.addCase(getCategories.fulfilled, (state, action: PayloadAction<Category[]>) => {
            state.categories = action.payload;
            state.isLoadingCategories = false;
            state.errorCategories = null;
        });
        builder.addCase(getCategories.rejected, (state, action) => {
            state.isLoadingCategories = false;
            state.errorCategories = action.payload.message || 'An unknown error occurred';
        });
    },
});

export const { setCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
