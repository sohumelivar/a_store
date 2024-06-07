import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { USER_LOCAL_KEY } from 'shared/const/localstorage';
import { logoutFunc } from '../services/logout/logout';

const initialState: UserSchema = {};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
        },
        logout: (state) => {
            state.authData = undefined;
            localStorage.removeItem(USER_LOCAL_KEY);
            logoutFunc();
        }
    },
});

export const { setAuthData, logout } = userSlice.actions;

export default userSlice.reducer;