import { modalDeleteItemBtnSchema } from "./model/types/modalDeleteItemBtnSchema";
import { DeleteItemBtn } from "./ui/DeleteItemBtn/DeleteItemBtn";
import deleteItemBtnModalReducer, { setError, setIsDeleteModal, setItemId } from './model/slice/deleteItemModalSlice';
import { DeleteItemModal } from "./ui/DeleteItemBtnModal/DeleteItemModal";
import { deleteItem } from "./model/services/deleteItem";

export {
    modalDeleteItemBtnSchema,
    DeleteItemBtn,
    deleteItemBtnModalReducer,
    setIsDeleteModal,
    DeleteItemModal,
    deleteItem,
    setError,
    setItemId
}