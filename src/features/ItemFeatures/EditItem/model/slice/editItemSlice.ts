import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { EditItemSchema } from '../types/editItemSchema';
import { getItem } from 'entities/Item';
import { updateItem } from '../services/updateItem';

const initialState: EditItemSchema = {
    itemName: '',
    category: '',
    description: '',
    price: null,
    photos: [],
    isLoading: false,
    error: null,
    errorMessage: null,
    itemId: null,
};

const editItemSlice = createSlice({
    name: 'editItem',
    initialState,
    reducers: {
        setItemName: (state, action: PayloadAction<string>) => {
            state.itemName = action.payload;
        },
        setCategory: (state, action: PayloadAction<string>) => {
            state.category = action.payload;
        },
        setDescription: (state, action: PayloadAction<string>) => {
            state.description = action.payload;
        },
        setPrice: (state, action: PayloadAction<number>) => {
            state.price = action.payload;
        },
        setPhotos: (state, action: PayloadAction<string[]>) => {
            state.photos = action.payload;
        },
        setItemId: (state, action: PayloadAction<number>) => {
            state.itemId = action.payload;
        },
        clearForm: (state) => {
            state.itemName = initialState.itemName;
            state.category = initialState.category;
            state.description = initialState.description;
            state.price = initialState.price;
            state.photos = initialState.photos;
            state.itemId = initialState.itemId;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
            state.errorMessage = initialState.errorMessage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getItem.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(getItem.fulfilled, (state, action) => {
            state.isLoading = false;
            state.itemName = action.payload.itemName;
            state.category = action.payload.category;
            state.description = action.payload.description;
            state.price = action.payload.price;
            state.photos = action.payload.photos;
        });
        builder.addCase(getItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
        builder.addCase(updateItem.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(updateItem.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(updateItem.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
            state.errorMessage = action.payload ? action.payload.errors : 'Unknown error';
        });
    },
});

export const { setItemName, setCategory, setDescription, setPrice, setPhotos, setItemId, clearForm } = editItemSlice.actions;

export default editItemSlice.reducer;
