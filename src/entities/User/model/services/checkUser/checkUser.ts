import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthData, User } from "entities/User";
import { $api } from "shared/api/api";
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from "shared/const/localstorage";

export const checkUser = createAsyncThunk(
    'user/checkUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get('/user/refresh');
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data.user));
            localStorage.setItem(TOKEN_LOCAL_KEY, response.data.accessToken);
            dispatch(setAuthData(response.data));
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
)