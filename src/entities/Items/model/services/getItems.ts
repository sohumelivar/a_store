import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { getItemsErrors, ItemsResponse } from "../types/items";

export const getItems = createAsyncThunk<ItemsResponse, number, { rejectValue: getItemsErrors }>(
    'items/fetchItems',
    async (page: number, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get(`/items?page=${page}`);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ error: 'An unknown error occurred' });
        }
    }
);