import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";

export const addItem = createAsyncThunk(
    'item/addItem',
    async (itemData: FormData, { rejectWithValue, dispatch }) => {
        try {
            const userId = JSON.parse(localStorage.getItem('user')).id;
            itemData.append('userId', userId);
            const response = await $api.post('/items/addItem', itemData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);