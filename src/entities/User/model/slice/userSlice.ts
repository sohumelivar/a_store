import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User, UserSchema } from '../types/user';
import { logoutUser } from '../services/logout/logout';
import { checkUser } from '../services/checkUser/checkUser';
import { TOKEN_LOCAL_KEY, USER_LOCAL_KEY } from 'shared/const/localstorage';

const initialState: UserSchema = {
    authData: null,
    isLoading: false,
    error: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setAuthData: (state, action: PayloadAction<User>) => {
            state.authData = action.payload;
            state.isLoading = false;
            state.error = null;
        },
        setLoading: (state, action: PayloadAction<boolean>) => {
            state.isLoading = action.payload;
        },
        setError: (state, action: PayloadAction<string>) => {
            state.error = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(logoutUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(logoutUser.fulfilled, (state) => {
            state.authData = null;
            localStorage.removeItem(USER_LOCAL_KEY);
            localStorage.removeItem(TOKEN_LOCAL_KEY);
            state.isLoading = false;
        });
        builder.addCase(logoutUser.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'An unknown error occurred';
        });
        builder.addCase(checkUser.pending, (state) => {
            state.isLoading = true;
            state.error = null;
        });
        builder.addCase(checkUser.fulfilled, (state, action: PayloadAction<{ user: User, accessToken: string }>) => {
            const { user, accessToken } = action.payload;
            state.isLoading = false;
            state.authData = user;
            localStorage.setItem(USER_LOCAL_KEY, JSON.stringify(user));
            localStorage.setItem(TOKEN_LOCAL_KEY, accessToken);
        });
        builder.addCase(checkUser.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'An unknown error occurred';
        });
    },
});

export const { setAuthData, setLoading, setError } = userSlice.actions;

export default userSlice.reducer;