import { configureStore } from '@reduxjs/toolkit';
import { StateSchema } from './StateSchema';
import { userReducer } from 'entities/User';
import { loginReducer, modalReducer } from 'features/AuthByUsername';
import { profileReducer } from 'entities/Profile';
import { registrationReducer } from 'features/Registration';
import { addItemReducer } from 'features/ItemFeatures/AddItem';
import { itemReducer } from 'entities/Item';
import { itemsReducer } from 'entities/Items';
import { toggleFavoriteReducer } from 'widgets/ToggleFavorite';
import { deleteItemBtnModalReducer } from 'features/ItemFeatures/DeleteItem';
import { editItemReducer } from 'features/ItemFeatures/EditItem';



export const store = configureStore<StateSchema>({
    reducer: {
        user: userReducer,
        loginForm: loginReducer,
        registrationForm: registrationReducer,
        profile: profileReducer,
        item: itemReducer,
        items: itemsReducer,
        toggleFavorite: toggleFavoriteReducer,
        addItem: addItemReducer,
        modal: modalReducer,
        deleteItemBtnModal: deleteItemBtnModalReducer,
        editItem: editItemReducer,
    },
    devTools: __IS_DEV__,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;