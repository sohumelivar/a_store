import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { ItemSchema } from '../types/ItemSchema';

interface ToggleFavoriteParams {
    itemId: number;
    userId: number;
}

export const toggleStateFavorite = createAsyncThunk<ItemSchema, ToggleFavoriteParams>(
    'item/toggleStateFavorite',
    async ({ itemId, userId }, { rejectWithValue }) => {
        try {
            const response = await $api.post<ItemSchema>('/items/toggleStateFavorite', {
                itemId,
                userId
            });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);