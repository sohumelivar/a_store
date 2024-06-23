import { memo, useCallback, useEffect } from "react";
import cls from './DeleteItemBtn.module.scss';
import { Button } from "shared/ui/Buton/Button";
import { classNames } from "shared/lib/classNames/classNames";
import { AppDispatch, RootState } from "app/providers/StoreProvider";
import { useDispatch, useSelector } from "react-redux";
import { setIsDeleteModal, setItemId } from "../../model/slice/deleteItemModalSlice";


interface DeleteBtnProps {
   className?: string;
   itemId?: number;
};

export const DeleteItemBtn = memo(({className, itemId}: DeleteBtnProps) => {
    const dispatch: AppDispatch = useDispatch();
    
    useEffect(() => {
        dispatch(setItemId(itemId));
    }, [itemId]);

    const handleDeleteItemModal = useCallback(() => {
        dispatch(setIsDeleteModal(true));
    }, []);

    return (
        <Button 
            className={classNames(cls.DeleteItemBtn, {}, [className])}
            type="button"
            onClick={handleDeleteItemModal}
        >
            Удалить
        </Button>
    )
});

