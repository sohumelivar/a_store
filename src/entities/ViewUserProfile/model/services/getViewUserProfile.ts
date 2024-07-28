import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { ViewUserProfile } from "../types/viewUserProfile";


interface getViewUserProfileError {
    message: string;
}

export const getViewUserProfile = createAsyncThunk<ViewUserProfile, number, { rejectValue: getViewUserProfileError }>(
    'item/getViewUserProfile',
    async ( userId, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get(`/user/viewUserProfile/${userId}`);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);