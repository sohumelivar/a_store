import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ModalSchema } from '../types/modalSchema';

const initialState: ModalSchema = {
    isAuthModal: false
};

export const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        setIsAuthModal: (state, action: PayloadAction<boolean>) => {
            state.isAuthModal = action.payload;
        },
    },
});

export const { setIsAuthModal } = modalSlice.actions;

export default modalSlice.reducer;