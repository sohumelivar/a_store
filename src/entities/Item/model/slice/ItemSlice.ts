import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Item, ItemSchema } from "../types/Item";
import { getItem } from "../services/getItem";
import { toggleFavorite } from "widgets/ToggleFavorite";

const initialState: ItemSchema = {
    item: {
        itemName: '',
        category: {
            name: ''
        },
        description: '',
        price: null,
        photos: [],
        onEdit: false,
        isFavorite: false,
    },
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
        clearItem: (state, action: PayloadAction<Item>) => {
            state.item = initialState.item;
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
        builder.addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<number>) => {
            state.item.isFavorite = !state.item.isFavorite;
        });
    },
})

export const {
    setItem,
    clearItem,
} = itemSlice.actions;

export default itemSlice.reducer;