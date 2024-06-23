import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";
import { getItems } from "entities/Items";
import { $api } from "shared/api/api";

export const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async (itemId: number, { rejectWithValue, dispatch, getState }) => {
        try {
            const state = getState() as RootState;
            const currentPage = state.items.currentPage;
            const userId = JSON.parse(localStorage.getItem('user'));
            await $api.post('/items/deleteItem', {itemId, userId: userId.id});
            dispatch(getItems(currentPage));
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);