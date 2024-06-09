import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { setAuthData } from "../../slice/userSlice";
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from "shared/const/localstorage";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/user/logout');
            dispatch(setAuthData(null));
            localStorage.removeItem(USER_LOCAL_KEY);
            localStorage.removeItem(TOKEN_LOCAL_KEY);
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
)