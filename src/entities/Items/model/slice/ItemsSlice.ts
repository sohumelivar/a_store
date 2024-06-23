import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { getItemsErrors, ItemsSchema } from "../types/items";
import { getItems } from "../services/getItems";
import { toggleFavorite } from "widgets/ToggleFavorite";

const initialState: ItemsSchema = {
    items: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
};

const itemsSlice = createSlice({
    name: 'items',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setItems: (state, action: PayloadAction<[]>) => {
            state.items = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getItems.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload.items;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(getItems.rejected, (state, action: PayloadAction<getItemsErrors>) => {
            state.isLoading = false;
            state.error = action.payload;
        });
        builder.addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const item = state.items.find(item => item.id === itemId);
            if (item) {
                item.isFavorite = !item.isFavorite;
            }
        });
    },
});

export const { setPage, setItems } = itemsSlice.actions;

export default itemsSlice.reducer;