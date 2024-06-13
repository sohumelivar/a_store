import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { AddItemSchema } from "../types/AddItemSchema";

export const addItem = createAsyncThunk(
    'item/addItem',
    async (itemData: FormData, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/items/addItem', itemData);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);