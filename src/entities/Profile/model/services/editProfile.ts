import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { Profile } from "../types/Profile";

interface updateProfileProps {
    formData: FormData;
    userId: number;
}

interface updateProfileError {
    errors?: string;
    message: string;
}

export const updateProfile = createAsyncThunk<Profile, updateProfileProps, { rejectValue: updateProfileError }>(
    'item/updateProfile',
    async ( { formData, userId }, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.put(`/user/updateProfile/${userId}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);