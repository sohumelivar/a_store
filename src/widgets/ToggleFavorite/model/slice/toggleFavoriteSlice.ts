import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { toggleFavorite } from '../services/toggleFavorite';
import { ToggleFavoriteState } from '../types/toggleFavoriteSchema';

const initialState: ToggleFavoriteState = {
    isLoading: false,
    error: null,
};

export const toggleFavoriteSlice = createSlice({
    name: 'toggleFavorite',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(toggleFavorite.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            state.isLoading = false;
        });
        builder.addCase(toggleFavorite.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
    },
});

export default toggleFavoriteSlice.reducer;
