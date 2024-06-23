import { ItemsSchema } from "./model/types/items";
import { getItems } from "./model/services/getItems";
import itemsReducer, { setItems, setPage } from './model/slice/ItemsSlice';

export {
    ItemsSchema,
    getItems,
    itemsReducer,
    setPage,
    setItems,
}