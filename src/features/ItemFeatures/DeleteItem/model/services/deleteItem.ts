import { createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "app/providers/StoreProvider";
import { getItems } from "entities/Items";
import { NavigateFunction } from "react-router-dom";
import { $api } from "shared/api/api";
import { getUserItems, setPage } from "widgets/UserItems";

interface DeleteItemProps {
    itemId: number;
    navigate: NavigateFunction;
}

export const deleteItem = createAsyncThunk(
    'item/deleteItem',
    async ({itemId, navigate}: DeleteItemProps, { rejectWithValue, dispatch, getState }) => {
        try {
            const state = getState() as RootState;
            const currentPage = state.items.currentPage;
            const userId = JSON.parse(localStorage.getItem('user'));
            await $api.post('/items/deleteItem', {itemId, userId: userId.id});
            dispatch(getItems(currentPage));
            dispatch(setPage(1));
            dispatch(getUserItems({page:currentPage, userId: userId.id}));
            navigate('/');
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);