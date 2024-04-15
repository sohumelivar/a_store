import { createAsyncThunk } from '@reduxjs/toolkit';
import { ItemsSchema } from '../types/ItemsSchema';
import { $api } from 'shared/api/api';


export const getItemsAll = createAsyncThunk<ItemsSchema>(
    'items/fetchItems',
    async () => {
        try {
            const response = await $api.get<ItemsSchema>('http://localhost:5000/api/user/getItems');
            return response.data;
        } catch (error) {
            console.log('⚛ --- ⚛ --- ⚛ --- ⚛ ---  >>> ☢ error:', error)
        }
    }
);