import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { Profile } from "../types/profile";

interface getProfileError {
    message: string;
}

export const getProfile = createAsyncThunk<Profile, number, { rejectValue: getProfileError }>(
    'item/getProfile',
    async ( userId, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get(`/user/profile/${userId}`);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);