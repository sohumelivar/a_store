import { createAsyncThunk } from '@reduxjs/toolkit';
import { $api } from 'shared/api/api';

interface UpdateItemProps {
    formData: FormData;
    itemId: string;
    userId: string;
}

interface UpdateItemError {
    errors?: string;
    message: string;
}

export const updateItem = createAsyncThunk<void, UpdateItemProps, { rejectValue: UpdateItemError }>(
    'item/updateItem',
    async ({ formData, itemId, userId }, { rejectWithValue }) => {
        try {
            formData.append('userId', userId.toString());
            await $api.put(`/items/update/${itemId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);
