import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';
import { ItemSchema } from '../types/ItemSchema';
import { setItem } from '../slice/ItemSlice';

export const getItemWithId = createAsyncThunk<ItemSchema, number>(
    'items/getItemWithId',
    async (itemId, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post<ItemSchema>('http://localhost:5000/api/items/getItemWithId', { id: itemId });
            dispatch(setItem(response.data));
            return response.data
        } catch (error: any) {
            return rejectWithValue(error.response.data);
        }
    }
);