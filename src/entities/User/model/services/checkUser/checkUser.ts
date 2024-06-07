import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthData, User } from "entities/User";
import { $api } from "shared/api/api";

interface CheckUserError {
    errorMessage: string;
}

export const checkUser = createAsyncThunk<User, void, { rejectValue: CheckUserError }>(
    'checkUser',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.get('/user/checkUser');
            if (response.data.error) throw new Error(response.data.error);
            dispatch(setAuthData(response.data));
        } catch (error) {
            return rejectWithValue({
                errorMessage: error.message || 'something wrong'
            })
        }
    }
)