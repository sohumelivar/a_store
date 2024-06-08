import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RegistrationSchema } from "../types/RegistrationSchema";
import { registerUser } from "../services/registerUser";

const initialState: RegistrationSchema = {
    username: '',
    email: '',
    password: '',
    secondPassword: '',
    firstname: '',
    lastname: '',
    age: '',
    avatar: '',
    isLoading: false,
    error: false,
    errorMessage: '',
}

export const registrationSlice = createSlice({
    name: 'registration',
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
        },
        setSecondPassword: (state, action: PayloadAction<string>) => {
            state.secondPassword = action.payload;
        },
        setFirstname: (state, action: PayloadAction<string>) => {
            state.firstname = action.payload;
        },
        setLastname: (state, action: PayloadAction<string>) => {
            state.lastname = action.payload;
        },
        setAge: (state, action: PayloadAction<number | string>) => {
            state.age = action.payload;
        },
        setAvatar: (state, action: PayloadAction<File | string>) => {
            state.avatar = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(registerUser.pending, (state) => {
            state.isLoading = true;
            state.error = false;
        });
        builder.addCase(registerUser.fulfilled, (state) => {
            state.isLoading = false;
        });
        builder.addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
            state.isLoading = false;
            state.error = action.payload?.message || 'An unknown error occurred';
            state.errorMessage = action.payload?.errors[0].message
        });
    },
});

export const {
    setUsername,
    setEmail,
    setPassword,
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
} = registrationSlice.actions;

export default registrationSlice.reducer;