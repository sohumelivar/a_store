import { createSlice } from '@reduxjs/toolkit';
import { ItemsSchema } from '../types/ItemsSchema';
import { getItemsAll } from '../services/getItemsAll';
import { toggleStateFavorite } from '../services/toggleStateFavorite';

export interface ItemsState {
    items: ItemsSchema;
    isLoading: boolean;
    error: string | null;
}

const initialState: ItemsState = {
    items: [],
    isLoading: false,
    error: null
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemsAll.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getItemsAll.fulfilled, (state, action) => {
                state.items = action.payload;
                state.isLoading = false;
            })
            .addCase(getItemsAll.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch items';
            })
            .addCase(toggleStateFavorite.fulfilled, (state, action) => {
                const index = state.items.findIndex(item => item.id === action.payload.id);
                if (index !== -1) {
                    state.items[index] = action.payload;
                }
            });
    }
});

export default itemsSlice.reducer;
