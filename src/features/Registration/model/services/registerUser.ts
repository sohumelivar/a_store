import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { USER_LOCAL_KEY } from "shared/const/localstorage";
import { setAuthData } from "entities/User";

export const registerUser = createAsyncThunk(
    'user/register',
    async (formData: FormData, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/user/registration', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            dispatch(setAuthData(response.data.user));
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.accessToken);
            return response.data;
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
);