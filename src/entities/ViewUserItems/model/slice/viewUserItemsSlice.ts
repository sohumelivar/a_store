import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { toggleFavorite } from "widgets/ToggleFavorite";
import { getViewUserItemsErrors, ViewUserItemsSchema } from "../types/ViewUserItems";
import { getViewUserItems } from "../services/getViewUserItems";

const initialState: ViewUserItemsSchema = {
    viewUserItems: [],
    currentPage: 1,
    totalPages: 1,
    isLoadingItems: false,
    error: null,
};

const viewUserItemsSlice = createSlice({
    name: 'viewUserItems',
    initialState,
    reducers: {
        setPage: (state, action: PayloadAction<number>) => {
            state.currentPage = action.payload;
        },
        setViewUserItems: (state, action: PayloadAction<[]>) => {
            state.viewUserItems = action.payload;
        },
        setClearViewUserItems: (state, action: PayloadAction<[]>) => {
            state.viewUserItems = initialState.viewUserItems;
            state.currentPage = initialState.currentPage;
            state.totalPages = initialState.totalPages;
            state.isLoadingItems = initialState.isLoadingItems;
            state.error = initialState.error;
        },
        setClearViewUserPage: (state, action: PayloadAction<number>) => {
            state.currentPage = initialState.currentPage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getViewUserItems.pending, (state) => {
            state.isLoadingItems = true;
            state.error = null;
        });
        builder.addCase(getViewUserItems.fulfilled, (state, action) => {
            state.isLoadingItems = false;
            state.viewUserItems = action.payload.items;
            state.totalPages = action.payload.totalPages;
        });
        builder.addCase(getViewUserItems.rejected, (state, action: PayloadAction<getViewUserItemsErrors>) => {
            state.isLoadingItems = false;
            state.error = action.payload;
        });
        builder.addCase(toggleFavorite.fulfilled, (state, action: PayloadAction<number>) => {
            const itemId = action.payload;
            const item = state.viewUserItems.find(item => item.id === itemId);
            if (item) {
                item.isFavorite = !item.isFavorite;
            }
        });
    },
});

export const { setPage, setViewUserItems, setClearViewUserItems, setClearViewUserPage } = viewUserItemsSlice.actions;

export default viewUserItemsSlice.reducer;
