import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAuthData, User } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from "shared/const/localstorage";
import { $api } from "shared/api/api";
import { setUsername, setPassword } from 'features/AuthByUsername';

interface LoginByUsernameProps {
    username: string;
    password: string;
}

interface LoginError {
    errorMessage: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: LoginError }>(
    'login/loginByUsername',
    async ({ username, password }, { rejectWithValue, dispatch }) => {
        try {
            const response = await $api.post('/user/login', { username, password });
            if (!response.data) {
                throw new Error();
            };
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data.user));
            localStorage.setItem(TOKEN_LOCAL_KEY, response.data.accessToken);
            dispatch(setAuthData(response.data.user));
            dispatch(setUsername(''));
            dispatch(setPassword(''));
            return response.data;
        } catch (error) {
            return rejectWithValue(error.response.data);
        };
    }
);