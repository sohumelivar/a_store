import { $api } from "shared/api/api";
import { AddItemSchema } from "../model/types/AddItemSchema";

export const AddItemAPI = async (props: AddItemSchema) => {
    const response = await $api.post<AddItemSchema>('/items/addItem', props);
    console.log('response --- >>> ', response.data);
} 