import { createAsyncThunk } from "@reduxjs/toolkit";
import { getItems, setPage } from "entities/Items";
import { $api } from "shared/api/api";
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from "shared/const/localstorage";
import { setAuthData } from "../../slice/userSlice";
import { RootState } from "app/providers/StoreProvider";

export const logoutUser = createAsyncThunk(
    'user/logout',
    async (_, { rejectWithValue, dispatch, getState }) => {
        try {
            const state = getState() as RootState;;
            const userId = state.user.authData.id;
            await $api.put(`/user/updateUserActivity/${userId}`);
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