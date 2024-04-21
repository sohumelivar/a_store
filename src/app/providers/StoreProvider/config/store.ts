import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { counterReducer } from 'entities/Counter';
import { userReducer } from 'entities/User';
import { loginReducer, modalReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { itemReducer, itemsReducer } from 'entities/Items';
import { registrationReducer } from 'pages/RegistrationPage';

export const store = configureStore<StateSchema>({
    reducer: {
        counter: counterReducer,
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
        items: itemsReducer,
        item: itemReducer,
        modal: modalReducer,
        registration: registrationReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;