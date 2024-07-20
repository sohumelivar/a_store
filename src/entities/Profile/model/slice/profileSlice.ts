import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Profile, ProfileSchema } from "../types/profile";
import { getProfile } from "../services/getProfile";
import { updateProfile } from "../services/editProfile";

const initialState: ProfileSchema = {
    user: {
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

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {
        setProfile: (state, action: PayloadAction<Profile>) => {
            state.user = action.payload;
        },
        setUsername: (state, action: PayloadAction<string>) => {
            state.user.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.user.email = action.payload;
        },
        setFirstname: (state, action: PayloadAction<string>) => {
            state.user.firstname = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.user.lastname = action.payload;
        },
        setAge: (state, action: PayloadAction<number | null>) => {
            state.user.age = action.payload;
        },
        setAvatar: (state, action: PayloadAction<File | null>) => {
            state.user.avatar = action.payload;
        },
        clearError: (state) => {
            state.error = null;
        },
        clearForm: (state) => {
            state.user = initialState.user;
            state.isLoading = initialState.isLoading;
            state.error = initialState.error;
            state.errorMessage = initialState.errorMessage;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(getProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(getProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
        });
        builder.addCase(getProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
        builder.addCase(updateProfile.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(updateProfile.fulfilled, (state, action: PayloadAction<Profile>) => {
            state.user = action.payload;
            state.isLoading = false;
            state.error = null;
            state.errorMessage = null;
        });
        builder.addCase(updateProfile.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
            state.errorMessage = action.payload ? action.payload.errors : 'Unknown error';
        });
    },
})

export const {
    setProfile,
    setUsername,
    setEmail,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
    clearError,
    clearForm,
} = profileSlice.actions;

export default profileSlice.reducer;