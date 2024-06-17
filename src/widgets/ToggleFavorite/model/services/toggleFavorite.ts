import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { Item } from 'entities/Item';

interface ToggleFavoriteParams {
    userId: number;
    itemId: number;
}

export const toggleFavorite = createAsyncThunk<Item, ToggleFavoriteParams, { rejectValue: { message: string } }>(
    'items/toggleFavorite',
    async ({ userId, itemId }, { rejectWithValue }) => {
        try {
            const response = await $api.post('/items/toggleFavorite', { userId, itemId });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue({ message: error.response.data.message });
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);
