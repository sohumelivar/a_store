import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toggleFavorite } from "widgets/ToggleFavorite";
import { FavoritesError, FavoritesSchema } from "../types/Favorites";
import { getFavorites } from "../services/getFavorites";

const initialState: FavoritesSchema = {
    favorites: [],
    currentPage: 1,
    totalPages: 1,
    isLoadingFavorites: false,
    error: null,
};

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setFavorites: (state, action: PayloadAction<[]>) => {
            state.favorites = action.payload;
        },
        clearFavoritesState: (state, action: PayloadAction<[]>) => {
            state.favorites = initialState.favorites;
            state.currentPage = initialState.currentPage;
            state.totalPages = initialState.totalPages;
            state.isLoadingFavorites = initialState.isLoadingFavorites;
            state.error = initialState.error;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getFavorites.pending, (state) => {
            state.isLoadingFavorites = true;
            state.error = null;
        });
        builder.addCase(getFavorites.fulfilled, (state, action) => {
            state.isLoadingFavorites = false;
            state.favorites = action.payload.items;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(getFavorites.rejected, (state, action: PayloadAction<FavoritesError>) => {
            state.isLoadingFavorites = false;
            state.error = action.payload;
        });
        builder.addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const item = state.favorites.find(item => item.id === itemId);
            if (item) {
                item.isFavorite = !item.isFavorite;
            }
        });
    },
});

export const { setPage, setFavorites, clearFavoritesState } = favoritesSlice.actions;

export default favoritesSlice.reducer;