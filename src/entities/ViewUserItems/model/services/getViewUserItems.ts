import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { getViewUserItemsErrors, getViewUserItemsProps, ViewUserItemsResponse } from "../types/ViewUserItems";

export const getViewUserItems = createAsyncThunk<ViewUserItemsResponse, getViewUserItemsProps, { rejectValue: getViewUserItemsErrors }>(
    'items/viewUserItems',
    async ( {page, viewUserId} , { rejectWithValue, dispatch }) => {
        try {
            const userData = localStorage.getItem('user');
            if (userData && JSON.parse(userData).id === viewUserId ) {
                const response = await $api.get(`/items/userItems/${viewUserId}?page=${page}`);
                return response.data;
            }
            const response = await $api.get(`/items/${viewUserId}/viewUserItems?page=${page}`);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ error: 'An unknown error occurred' });
        }
    }
);