import { createAsyncThunk } from "@reduxjs/toolkit";
import { Item } from "../types/Item";
import { $api } from "shared/api/api";

interface getItemProps {
    itemId: number;
    userId?: number;
}

interface getItemError {
    message: string;
}

export const getItem = createAsyncThunk<Item, getItemProps, { rejectValue: getItemError }>(
    'item/getItem',
    async (itemData, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/item/getItem', itemData)
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);