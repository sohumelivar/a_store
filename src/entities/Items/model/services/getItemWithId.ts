import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { ItemSchema } from '../types/ItemSchema';

export const getItemWithId = createAsyncThunk<ItemSchema, number>(
    'items/fetchItem',
    async (itemId, { rejectWithValue }) => {
        try {
            const response = await $api.post<ItemSchema>('http://localhost:5000/api/user/getItemWithId', { id: itemId });
            return response.data;
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);