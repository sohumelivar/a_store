import { createAsyncThunk } from "@reduxjs/toolkit";
import { RegistrationSchema } from "../types/RegistrationSchema";
import { $api } from "shared/api/api";
import { USER_LOCAL_KEY } from "shared/const/localstorage";
import { setAuthData } from "entities/User";

export const registerUser = createAsyncThunk(
    'user/register',
    async (registrationData: RegistrationSchema, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/user/registration', registrationData);
            dispatch(setAuthData(response.data.user));
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data.user));
            localStorage.setItem('token', response.data.accessToken);
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
);