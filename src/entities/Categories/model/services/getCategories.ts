import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { Category, GetCategoriesError } from '../types/Categories';

export const getCategories = createAsyncThunk<Category[], void, { rejectValue: GetCategoriesError }>(
    'categories/getCategories',
    async (_, { rejectWithValue }) => {
        try {
            const response = await $api.get('/items/categories');
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);
