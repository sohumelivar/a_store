import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";

export const checkUser = createAsyncThunk(
    'user/checkUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get('/user/refresh');
            return {
                user: response.data.user,
                accessToken: response.data.accessToken,
            };
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
)