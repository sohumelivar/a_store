import { createAsyncThunk, isRejectedWithValue } from "@reduxjs/toolkit";
import { getItems, setPage } from "entities/Items";
import { $api } from "shared/api/api";
import { checkUser } from "../checkUser/checkUser";
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from "shared/const/localstorage";
import { setAuthData } from "../../slice/userSlice";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue, dispatch }) => {
        try {
            localStorage.removeItem(USER_LOCAL_KEY);
            localStorage.removeItem(TOKEN_LOCAL_KEY);
            await $api.post('/user/logout');
            dispatch(setAuthData());
            dispatch(getItems(1));
            dispatch(setPage(1));
        } catch (error: any) {
            if (error.response) {
                return rejectWithValue(error.response.data);
            }
            return rejectWithValue({ message: 'An unknown error occurred' });
        }
    }
)