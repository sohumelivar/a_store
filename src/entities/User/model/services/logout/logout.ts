import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            $api.post('/user/logout');
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
)