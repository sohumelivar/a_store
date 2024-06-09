import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer, modalReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { itemReducer, itemsReducer } from 'entities/Items';
import { registrationReducer } from 'features/Registration';


export const store = configureStore<StateSchema>({
    reducer: {
        user: userReducer,
        loginForm: loginReducer,
        registrationForm: registrationReducer,
        profile: profileReducer,
        items: itemsReducer,
        item: itemReducer,
        modal: modalReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;