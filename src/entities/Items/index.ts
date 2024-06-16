import { ItemsSchema } from "./model/types/items";
import { getItems } from "./model/services/getItems";
import itemsReducer, { setPage } from './model/slice/ItemsSlice';

export {
    ItemsSchema,
    getItems,
    itemsReducer,
    setPage,
}