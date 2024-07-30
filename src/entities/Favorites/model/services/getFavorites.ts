import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { FavoritesResponse, FavoritesError } from "../types/Favorites";

export const getFavorites = createAsyncThunk<FavoritesResponse, number, { rejectValue: FavoritesError }>(
    'items/getFavorites',
    async (page: number, { rejectWithValue, dispatch }) => {
        try {
            const userData = localStorage.getItem('user');
            if (userData) {
                const userId = JSON.parse(userData).id;
                const response = await $api.get(`/items/${userId}/getFavorites?page=${page}`);
                return response.data;
            }
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ error: 'An unknown error occurred' });
        }
    }
);