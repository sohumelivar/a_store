import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { modalDeleteItemBtnSchema } from '../types/modalDeleteItemBtnSchema';
import { deleteItem } from '../services/deleteItem';

const initialState: modalDeleteItemBtnSchema = {
    isDeleteModal: false,
    error: null,
    itemId: null
};

export const deleteItemBtnModalSlice = createSlice({
    name: 'deleteItemBtnModal',
    initialState,
    reducers: {
        setIsDeleteModal: (state, action: PayloadAction<boolean>) => {
            state.isDeleteModal = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = null;
        },
        setItemId: (state, action: PayloadAction<number>) => {
            state.itemId = action.payload;
        },

    },
    extraReducers: (builder) => {
        builder.addCase(deleteItem.fulfilled, (state) => {
           state.isDeleteModal = false;
        });
        builder.addCase(deleteItem.rejected, (state, action: PayloadAction<any>) => {
            state.error = action.payload?.message || 'An unknown error occurred';
        });
    },
});

export const { setIsDeleteModal, setError, setItemId } = deleteItemBtnModalSlice.actions;

export default deleteItemBtnModalSlice.reducer;