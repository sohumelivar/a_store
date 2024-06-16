import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer, modalReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { registrationReducer } from 'features/Registration';
import { addItemReducer } from 'features/ItemFeatures/AddItem';
import { itemReducer } from 'entities/Item';
import { itemsReducer } from 'entities/Items';



export const store = configureStore<StateSchema>({
    reducer: {
        user: userReducer,
        loginForm: loginReducer,
        registrationForm: registrationReducer,
        profile: profileReducer,
        item: itemReducer,
        items: itemsReducer,
        addItem: addItemReducer,
        modal: modalReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;