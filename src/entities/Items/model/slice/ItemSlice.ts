import { createSlice } from "@reduxjs/toolkit";
import { ItemSchema } from "../types/ItemSchema";
import { getItemWithId } from "../services/getItemWithId";

export interface ItemState {
    item: ItemSchema;
    isLoading: boolean;
    error: string | null;
}

const initialState: ItemState = {
    item: {},
    isLoading: false,
    error: null
}

const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getItemWithId.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(getItemWithId.fulfilled, (state, action) => {
                state.item = action.payload;
                state.isLoading = false;
            })
            .addCase(getItemWithId.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message || 'Failed to fetch item';
            });
    }
});

export default itemSlice.reducer;
