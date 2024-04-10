import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setAuthData, User } from "entities/User";
import i18n from "shared/config/i18n/i18n";
import { USER_LOCAL_KEY } from "shared/const/localstorage";

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
            const response = await axios.post<User>('http://localhost:5000/api/user/test', { username, password });

            if (!response.data) {
                throw new Error();
            }

            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(response.data))
            dispatch(setAuthData(response.data));

            return response.data;
        } catch (err) {
            return rejectWithValue({ errorMessage: i18n.t('Вы ввели неверный логин или пароль') });
        }
    }
)