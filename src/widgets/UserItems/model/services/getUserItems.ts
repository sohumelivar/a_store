import { createAsyncThunk } from "@reduxjs/toolkit";
import { $api } from "shared/api/api";
import { GetUserItemsProps, UserItemsResponse } from "../types/userItems";
import { getItemsErrors } from "entities/Items/model/types/items";
  
  export const getUserItems = createAsyncThunk<UserItemsResponse, GetUserItemsProps, { rejectValue: getItemsErrors }>(
    'user/getUserItems',
    async ({ page, userId }, { rejectWithValue }) => {
      try {
        const response = await $api.get(`/items/userItems/${userId}`, {
          params: { page }
        });
        return response.data;
      } catch (error: any) {
        if (error.response) {
          return rejectWithValue(error.response.data);
        }
        return rejectWithValue({ error: 'An unknown error occurred' });
      }
    }
  );