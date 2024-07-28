import { ViewUserItemsSchema } from "./model/types/ViewUserItems";
import viewUserItemsReducer, { setClearViewUserItems, setClearViewUserPage, setPage, setViewUserItems } from './model/slice/viewUserItemsSlice';
import { getViewUserItems } from "./model/services/getViewUserItems";

export {
    ViewUserItemsSchema,
    viewUserItemsReducer,
    setPage,
    setViewUserItems,
    getViewUserItems,
    setClearViewUserItems,
    setClearViewUserPage,
}