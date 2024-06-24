import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddItemSchema } from "../types/AddItemSchema";
import { addItem } from "../services/addItem";

const initialState: AddItemSchema = {
    item: {
        itemName: '',
        category: '',
        description: '',
        price: null,
        onEdit: false,
        isFavorite: false,
    },
    isLoading: false,
    error: null,
    userId: null,
}

export const addItemSlice = createSlice({
    name: 'addIdem',
    initialState,
    reducers: {
        setItemName: (state, action: PayloadAction<string>) => {
            state.item.itemName = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.item.category = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.item.description = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.item.price = action.payload;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
        setUserId: (state, action: PayloadAction<number>) => {
            state.userId = action.payload;
        },
        resetForm: (state) => {
            state.item = initialState.item;
            state.error = initialState.error;
            state.isLoading = initialState.isLoading;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addItem.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(addItem.fulfilled, (state) => {
            state.item.itemName = '';
            state.item.category = '';
            state.item.description = '';
            state.item.price = null;
            state.error = null;
            state.userId = null;
            state.isLoading = false;
        });
        builder.addCase(addItem.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'An unknown error occurred';
        });
    },
});

export const {
    setItemName,
    setCategory,
    setDescription,
    setPrice,
    setLoading,
    setError,
    setUserId,
    resetForm,
} = addItemSlice.actions;

export default addItemSlice.reducer;