import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginSchema } from '../types/loginSchema';
import { loginByUsername } from '../services/loginByUsername/loginByUsername';

const initialState: LoginSchema = {
    username: '',
    email: '',
    password: '',
    isLoading: false,
    error: null
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
        },
        setEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload;
        },
        setPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(loginByUsername.pending, (state) => {
            state.error = 'Подождите ...';
            state.isLoading = true;
        });
        builder.addCase(loginByUsername.fulfilled, (state, action) => {
            state.isLoading = false;
            state.error = undefined;
        });
        builder.addCase(loginByUsername.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload ? action.payload.message : 'Unknown error';
        });
    },
});

export const { setUsername, setPassword, setEmail } = loginSlice.actions;

export default loginSlice.reducer;