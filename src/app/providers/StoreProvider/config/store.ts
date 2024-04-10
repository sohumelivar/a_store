import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';

export const store = configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;