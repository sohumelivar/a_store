import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ViewUserProfile, ViewUserProfileSchema } from "../types/viewUserProfile";
import { getViewUserProfile } from "../services/getViewUserProfile";

const initialState: ViewUserProfileSchema = {
    viewUserProfile: {
        username: '',
        email: '',
        firstname: '',
        lastname: '',
        age: null,
        avatar: null,
    },
    isLoading: false,
    error: null,
    errorMessage: null,
};

export const viewUserProfileSlice = createSlice({
    name: 'viewUserProfile',
    initialState,
    reducers: {
        setViewUserProfile: (state, action: PayloadAction<ViewUserProfile>) => {
            state.viewUserProfile = action.payload;
        },
       
        clearError: (state) => {
            state.error = null;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getViewUserProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getViewUserProfile.fulfilled, (state, action: PayloadAction<ViewUserProfile>) => {
            state.viewUserProfile = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getViewUserProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
    },
})

export const {
    setViewUserProfile,
    clearError,
} = viewUserProfileSlice.actions;

export default viewUserProfileSlice.reducer;