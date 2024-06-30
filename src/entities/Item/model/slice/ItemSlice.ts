import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item, ItemSchema } from "../types/Item";
import { getItem } from "../services/getItem";

const initialState: ItemSchema = {
    item: null,
    isLoading: false,
    error: null,
};

export const itemSlice = createSlice({
    name: 'item',
    initialState,
    reducers: {
        setItem: (state, action: PayloadAction<Item>) => {
            state.item = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getItem.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getItem.fulfilled, (state, action: PayloadAction<Item>) => {
            state.item = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
    },
})

export const {
    setItem,
} = itemSlice.actions;

export default itemSlice.reducer;