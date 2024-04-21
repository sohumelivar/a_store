import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegistrationSchema } from '../types/RegestrationSchema';

const initialState: RegistrationSchema = {
    username: '',
    password: '',
    secondPassword: '',
    firstname: '',
    lastname: '',
    age: '',
    avatar: '',
};

export const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setUsername: (state, action: PayloadAction<string>) => {
            state.username = action.payload;
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
        setAge: (state, action: PayloadAction<string>) => {
            state.age = action.payload;
        },
        setAvatar: (state, action: PayloadAction<string>) => {
            state.avatar = action.payload;
        },
    },
    // extraReducers: (builder) => {
    //     builder.addCase(loginByUsername.pending, (state) => {
    //         state.error = 'Подождите ...';
    //         state.isLoading = true;
    //     });
    //     builder.addCase(loginByUsername.fulfilled, (state, action) => {
    //         state.isLoading = false;
    //         state.error = undefined;
    //     });
    //     builder.addCase(loginByUsername.rejected, (state, action) => {
    //         state.isLoading = false;
    //         state.error = action.payload ? action.payload.errorMessage : 'Unknown error';
    //     });
    // },
});

export const { 
    setUsername, 
    setPassword, 
    setSecondPassword,
    setFirstname,
    setLastname,
    setAge,
    setAvatar,
 } = registrationSlice.actions;

export default registrationSlice.reducer;