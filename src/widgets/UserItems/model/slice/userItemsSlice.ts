import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUserItems } from "../services/getUserItems";
import { UserItemsSchema, getUserItemsError } from "../types/userItems";
import { Item } from "entities/Item";
import { toggleFavorite } from "widgets/ToggleFavorite";

const initialState: UserItemsSchema = {
    items: [],
    currentPage: 1,
    totalPages: 1,
    isLoading: false,
    error: null,
}

export const userItemsSlice = createSlice({
    name: 'userItems',
    initialState,
    reducers: {
        setUserItems: (state, action: PayloadAction<Item[]>) => {
            state.items = action.payload;
        },
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        clearUserItems: (state) => {
            state.items = initialState.items;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getUserItems.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getUserItems.fulfilled, (state, action) => {
            state.isLoading = false;
            state.items = action.payload.items;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(getUserItems.rejected, (state, action: PayloadAction<getUserItemsError>) => {
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
})

export const { setUserItems, setPage, clearUserItems } = userItemsSlice.actions;
export default userItemsSlice.reducer;
