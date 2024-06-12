import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AddItemSchema } from "../types/AddItemSchema";

const initialState: AddItemSchema = {
    item: {
        itemName: '',
        category: '',
        description: '',
        price: null,
        photo: [],
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
        setPhoto: (state, action: PayloadAction<string[]>) => {
            state.item.photo = action.payload;
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
    }
});

export const { 
    setItemName,
    setCategory,
    setDescription,
    setPrice,
    setPhoto,
    setLoading,
    setError,
    setUserId,
 } = addItemSlice.actions;

export default addItemSlice.reducer;